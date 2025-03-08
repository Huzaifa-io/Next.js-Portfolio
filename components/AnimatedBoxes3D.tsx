"use client"

import { useRef, useMemo, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function Box({ position, color }: { position: [number, number, number]; color: THREE.Color }) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2
    mesh.current.rotation.y += delta * 0.3
  })

  return (
    <mesh
      position={position}
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.5 : 1}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={hovered ? color.multiplyScalar(1.5) : color} />
    </mesh>
  )
}

function BoxesGroup() {
  const boxes = useMemo(() => {
    const temp = []
    for (let i = 0; i < 100; i++) {
      const position: [number, number, number] = [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ]
      const color = new THREE.Color().setHSL(Math.random(), 0.7, 0.2) // Darker colors
      temp.push({ position, color })
    }
    return temp
  }, [])

  return (
    <>
      {boxes.map((box, index) => (
        <Box key={index} position={box.position} color={box.color} />
      ))}
    </>
  )
}

export default function AnimatedBoxes3D() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <BoxesGroup />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}

