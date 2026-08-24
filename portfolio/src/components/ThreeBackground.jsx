import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 9

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const teal = 0x00d9c0
    const violet = 0x7c5cff
    const amber = 0xf2b441

    const shapes = [
      { geo: new THREE.IcosahedronGeometry(1.6, 0), color: teal, pos: [-2.6, 1.1, 0], speed: 0.25 },
      { geo: new THREE.TorusGeometry(1.1, 0.32, 12, 40), color: violet, pos: [2.4, -0.6, -1.5], speed: 0.35 },
      { geo: new THREE.OctahedronGeometry(0.9, 0), color: amber, pos: [1.6, 1.8, -2], speed: 0.3 },
    ]

    const meshes = shapes.map(({ geo, color, pos }) => {
      const material = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.55 })
      const mesh = new THREE.Mesh(geo, material)
      mesh.position.set(...pos)
      group.add(mesh)
      return mesh
    })

    const ambient = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambient)

    let mouseX = 0
    let mouseY = 0
    const handlePointerMove = (e) => {
      const rect = mount.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseY = ((e.clientY - rect.top) / rect.height) * 2 - 1
    }
    // Listen on the window rather than the canvas itself, since the hero's
    // text and editor sit visually above the canvas and would otherwise
    // swallow the pointer events needed for the parallax effect.
    window.addEventListener('pointermove', handlePointerMove)

    let frameId
    const clock = new THREE.Clock()

    const animate = () => {
      const delta = prefersReducedMotion ? 0.002 : clock.getDelta()

      meshes.forEach((mesh, i) => {
        mesh.rotation.x += delta * shapes[i].speed
        mesh.rotation.y += delta * shapes[i].speed * 1.3
      })

      group.rotation.y += (mouseX * 0.25 - group.rotation.y) * 0.04
      group.rotation.x += (-mouseY * 0.15 - group.rotation.x) * 0.04

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handlePointerMove)
      meshes.forEach((mesh) => {
        mesh.geometry.dispose()
        mesh.material.dispose()
      })
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="hero__three" aria-hidden="true" />
}
