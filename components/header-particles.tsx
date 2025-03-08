"use client"

import { Suspense, useRef } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

// Dynamically import the Canvas component
const DynamicCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
})

// Dynamically import our ParticlesAnimation component
const DynamicParticlesAnimation = dynamic(() => import("./particles-animation"), {
  ssr: false,
})

export default function HeaderParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <Suspense fallback={<div>Loading particles...</div>}>
        <DynamicCanvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <DynamicParticlesAnimation />
        </DynamicCanvas>
      </Suspense>
    </motion.div>
  )
}

