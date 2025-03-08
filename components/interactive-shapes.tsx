"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const shapes = [
  { type: "circle", size: 50 },
  { type: "square", size: 40 },
  { type: "triangle", size: 60 },
  { type: "circle", size: 30 },
  { type: "square", size: 50 },
  { type: "triangle", size: 40 },
]

export default function InteractiveShapes() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const shapes = containerRef.current?.children
      if (shapes) {
        Array.from(shapes).forEach((shape: Element, index) => {
          const speed = (index + 1) * 0.5
          const x = (window.innerWidth - clientX * speed) / 100
          const y = (window.innerHeight - clientY * speed) / 100
          ;(shape as HTMLElement).style.transform = `translate(${x}px, ${y}px)`
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.type === "circle" ? "rounded-full" : ""} 
                      ${shape.type === "triangle" ? "triangle" : ""} 
                      bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 hover:opacity-20 transition-opacity`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      ))}
    </div>
  )
}

