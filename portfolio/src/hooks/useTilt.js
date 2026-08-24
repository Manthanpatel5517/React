import { useRef } from 'react'

/**
 * Adds a subtle 3D tilt-toward-cursor effect to any element.
 * Respects prefers-reduced-motion and resets cleanly on pointer leave.
 */
export function useTilt({ max = 10, scale = 1.02 } = {}) {
  const ref = useRef(null)

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return
    const el = ref.current
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    const rotateY = x * max * 2
    const rotateX = -y * max * 2

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`

    const glowX = (x + 0.5) * 100
    const glowY = (y + 0.5) * 100
    el.style.setProperty('--tilt-glow-x', `${glowX}%`)
    el.style.setProperty('--tilt-glow-y', `${glowY}%`)
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return { ref, handleMouseMove, handleMouseLeave }
}
