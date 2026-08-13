import { useEffect, useRef } from 'react'

/* ─── Types ─── */
type NoteType = 'quarter' | 'eighth' | 'sixteenth'

interface MusicNote {
  x: number
  lineIndex: number
  staffIndex: number
  type: NoteType
  stemUp: boolean
  opacity: number
  hasTie: boolean
}

interface BarLine {
  x: number
  staffIndex: number
  opacity: number
}

interface Staff {
  baseY: number            // center Y of the staff
  angle: number            // rotation angle in radians (slight tilt)
  waveAmp: number          // amplitude of the wave in the lines
  waveFreq: number         // frequency of the wave
  wavePhase: number        // phase offset for animation
  waveSpeed: number        // how fast the wave moves
}

/* ─── Constants ─── */
const LINE_SPACING = 14
const STAFF_HEIGHT = LINE_SPACING * 4
const NOTE_SPEED = 40
const SPAWN_INTERVAL = 600
const BAR_INTERVAL = 2200
const FADE_ZONE = 80

/* ─── Wave function: returns Y offset for a given x position on a staff line ─── */
function waveY(x: number, staff: Staff, time: number): number {
  return Math.sin(x * staff.waveFreq + staff.wavePhase + time * staff.waveSpeed) * staff.waveAmp
}

/* ─── Drawing Helpers ─── */

function drawStaffLines(ctx: CanvasRenderingContext2D, staff: Staff, w: number, time: number) {
  ctx.save()
  ctx.translate(0, staff.baseY)
  ctx.rotate(staff.angle)

  ctx.strokeStyle = 'rgba(255,255,255,0.12)'
  ctx.lineWidth = 1

  // Extend beyond viewport to cover rotation
  const extend = 100

  for (let line = 0; line < 5; line++) {
    const lineBaseY = (line - 2) * LINE_SPACING // centered around 0

    ctx.beginPath()
    ctx.moveTo(-extend, lineBaseY + waveY(-extend, staff, time))

    // Draw wavy line with segments
    const step = 20
    for (let x = -extend + step; x <= w + extend; x += step) {
      const wy = lineBaseY + waveY(x, staff, time)
      ctx.lineTo(x, wy)
    }
    ctx.stroke()
  }

  ctx.restore()
}

function getStaffLineY(staff: Staff, lineIndex: number, x: number, time: number): { worldX: number; worldY: number } {
  // lineIndex 0–8: 0=top line, 2=second line, 4=middle, 6=fourth, 8=bottom; odds=spaces
  const localLineY = ((lineIndex / 2) - 2) * LINE_SPACING
  const wy = waveY(x, staff, time)

  // Apply rotation
  const cos = Math.cos(staff.angle)
  const sin = Math.sin(staff.angle)
  const localX = x
  const localY = localLineY + wy

  return {
    worldX: localX * cos - localY * sin,
    worldY: staff.baseY + localX * sin + localY * cos,
  }
}

function drawNoteHead(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(-0.2)
  ctx.beginPath()
  ctx.ellipse(0, 0, 5, 3.5, 0, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(255,255,255,0.25)'
  ctx.fill()
  ctx.strokeStyle = 'rgba(255,255,255,0.35)'
  ctx.lineWidth = 0.8
  ctx.stroke()
  ctx.restore()
}

function drawStem(ctx: CanvasRenderingContext2D, x: number, y: number, up: boolean) {
  const stemLen = 28
  const sx = up ? x + 4.5 : x - 4.5
  const ey = up ? y - stemLen : y + stemLen

  ctx.save()
  ctx.strokeStyle = 'rgba(255,255,255,0.35)'
  ctx.lineWidth = 1.2
  ctx.beginPath()
  ctx.moveTo(sx, y)
  ctx.lineTo(sx, ey)
  ctx.stroke()
  ctx.restore()

  return { sx, ey }
}

function drawFlag(ctx: CanvasRenderingContext2D, sx: number, ey: number, up: boolean, count: number) {
  ctx.save()
  ctx.strokeStyle = 'rgba(255,255,255,0.30)'
  ctx.lineWidth = 1.2
  ctx.lineCap = 'round'

  for (let i = 0; i < count; i++) {
    const offset = i * (up ? 6 : -6)
    ctx.beginPath()
    if (up) {
      ctx.moveTo(sx, ey + offset)
      ctx.bezierCurveTo(sx + 10, ey + offset + 4, sx + 10, ey + offset + 12, sx + 2, ey + offset + 18)
    } else {
      ctx.moveTo(sx, ey + offset)
      ctx.bezierCurveTo(sx - 10, ey + offset - 4, sx - 10, ey + offset - 12, sx - 2, ey + offset - 18)
    }
    ctx.stroke()
  }
  ctx.restore()
}

function drawMusicNote(ctx: CanvasRenderingContext2D, note: MusicNote, staffs: Staff[], time: number) {
  const staff = staffs[note.staffIndex]
  if (!staff) return

  const pos = getStaffLineY(staff, note.lineIndex, note.x, time)

  ctx.save()
  ctx.globalAlpha = note.opacity

  drawNoteHead(ctx, pos.worldX, pos.worldY)
  const { sx, ey } = drawStem(ctx, pos.worldX, pos.worldY, note.stemUp)

  if (note.type === 'eighth') {
    drawFlag(ctx, sx, ey, note.stemUp, 1)
  } else if (note.type === 'sixteenth') {
    drawFlag(ctx, sx, ey, note.stemUp, 2)
  }

  ctx.restore()
}

function drawBarLine(ctx: CanvasRenderingContext2D, bar: BarLine, staffs: Staff[], time: number) {
  const staff = staffs[bar.staffIndex]
  if (!staff) return

  const top = getStaffLineY(staff, 0, bar.x, time)
  const bottom = getStaffLineY(staff, 8, bar.x, time)

  ctx.save()
  ctx.globalAlpha = bar.opacity
  ctx.strokeStyle = 'rgba(255,255,255,0.18)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(top.worldX, top.worldY)
  ctx.lineTo(bottom.worldX, bottom.worldY)
  ctx.stroke()
  ctx.restore()
}

function drawTieArc(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number,
  x2: number, y2: number,
  above: boolean,
  alpha: number
) {
  const midX = (x1 + x2) / 2
  const dist = Math.abs(x2 - x1)
  const curve = above ? -dist * 0.25 : dist * 0.25
  const midY = (y1 + y2) / 2 + curve

  ctx.save()
  ctx.globalAlpha = alpha * 0.4
  ctx.strokeStyle = 'rgba(255,255,255,0.15)'
  ctx.lineWidth = 1
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.quadraticCurveTo(midX, midY, x2, y2)
  ctx.stroke()
  ctx.restore()
}

/* ─── Main Component ─── */
export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let raf = 0

    let staffs: Staff[] = []
    let notes: MusicNote[] = []
    let bars: BarLine[] = []
    let lastNoteTime = 0
    let lastBarTime = 0

    function createStaffs() {
      const staffCount = h > 600 ? 3 : 2
      const totalArea = staffCount * (STAFF_HEIGHT + 80)
      const startY = (h - totalArea) / 2 + 40

      staffs = Array.from({ length: staffCount }, (_, i) => ({
        baseY: startY + i * (STAFF_HEIGHT + 100),
        angle: ((i % 2 === 0 ? 1 : -1) * (2 + Math.random() * 3)) * Math.PI / 180, // ±2–5 degrees
        waveAmp: 3 + Math.random() * 5,        // 3–8px wave
        waveFreq: 0.004 + Math.random() * 0.004, // gentle frequency
        wavePhase: Math.random() * Math.PI * 2,
        waveSpeed: 0.3 + Math.random() * 0.4,   // slow phase drift
      }))
    }

    function resize() {
      const parent = canvas!.parentElement
      if (!parent) return
      w = parent.offsetWidth
      h = parent.offsetHeight
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas!.width = w * dpr
      canvas!.height = h * dpr
      canvas!.style.width = `${w}px`
      canvas!.style.height = `${h}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      createStaffs()
    }

    resize()

    const noteTypes: NoteType[] = ['quarter', 'quarter', 'eighth', 'eighth', 'sixteenth']

    function spawnNote(timestamp: number) {
      if (timestamp - lastNoteTime < SPAWN_INTERVAL) return

      for (let si = 0; si < staffs.length; si++) {
        if (Math.random() > 0.6) continue

        const lineIndex = Math.floor(Math.random() * 9)
        const type = noteTypes[Math.floor(Math.random() * noteTypes.length)]
        const stemUp = lineIndex > 4
        const hasTie = Math.random() < 0.15

        notes.push({
          x: w + 20,
          lineIndex,
          staffIndex: si,
          type,
          stemUp,
          opacity: 0,
          hasTie,
        })
      }
      lastNoteTime = timestamp
    }

    function spawnBar(timestamp: number) {
      if (timestamp - lastBarTime < BAR_INTERVAL) return

      for (let si = 0; si < staffs.length; si++) {
        bars.push({
          x: w + 10,
          staffIndex: si,
          opacity: 0,
        })
      }
      lastBarTime = timestamp
    }

    function computeEdgeAlpha(x: number): number {
      if (x > w - FADE_ZONE) {
        return Math.max(0, (w - x) / FADE_ZONE)
      }
      if (x < FADE_ZONE) {
        return Math.max(0, x / FADE_ZONE)
      }
      return 1
    }

    let lastTimestamp = 0
    const FRAME_INTERVAL = 1000 / 30 // cap at 30fps
    let frameBudget = 0

    function animate(timestamp: number) {
      const rawDt = lastTimestamp ? timestamp - lastTimestamp : 16
      lastTimestamp = timestamp
      frameBudget += rawDt

      // Skip frame if under budget
      if (frameBudget < FRAME_INTERVAL) {
        raf = requestAnimationFrame(animate)
        return
      }

      const dt = frameBudget / 1000
      frameBudget = 0
      const time = timestamp / 1000

      ctx!.clearRect(0, 0, w, h)

      // Draw wavy angled staff lines (no clefs)
      for (const staff of staffs) {
        drawStaffLines(ctx!, staff, w, time)
      }

      // Spawn
      spawnNote(timestamp)
      spawnBar(timestamp)

      // Update & draw notes
      for (let i = notes.length - 1; i >= 0; i--) {
        const note = notes[i]
        note.x -= NOTE_SPEED * dt

        const edgeAlpha = computeEdgeAlpha(note.x)
        note.opacity = 0.35 * edgeAlpha

        if (note.x < -30) {
          notes.splice(i, 1)
          continue
        }

        drawMusicNote(ctx!, note, staffs, time)
      }

      // Tie arcs
      for (let i = 0; i < notes.length - 1; i++) {
        const a = notes[i]
        const b = notes[i + 1]
        if (a.hasTie && a.staffIndex === b.staffIndex && Math.abs(a.x - b.x) < 120) {
          const staff = staffs[a.staffIndex]
          if (!staff) continue
          const p1 = getStaffLineY(staff, a.lineIndex, a.x, time)
          const p2 = getStaffLineY(staff, b.lineIndex, b.x, time)
          const above = a.stemUp
          const alpha = Math.min(a.opacity, b.opacity)
          drawTieArc(ctx!, p1.worldX, p1.worldY, p2.worldX, p2.worldY, above, alpha)
        }
      }

      // Update & draw bar lines
      for (let i = bars.length - 1; i >= 0; i--) {
        const bar = bars[i]
        bar.x -= NOTE_SPEED * dt

        const edgeAlpha = computeEdgeAlpha(bar.x)
        bar.opacity = edgeAlpha

        if (bar.x < -10) {
          bars.splice(i, 1)
          continue
        }

        drawBarLine(ctx!, bar, staffs, time)
      }

      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)

    let resizeTimer: ReturnType<typeof setTimeout>
    function onResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => resize(), 150)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[5] pointer-events-none"
      aria-hidden="true"
    />
  )
}
