"use client"

import React, { useEffect, useState, useCallback } from "react"

interface Box {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

const Box = React.memo(({ x, y, size, delay }: Omit<Box, "id">) => (
  <div
    className="absolute bg-gray-300 opacity-10 animate-float"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      animationDelay: `${delay}s`,
      willChange: "transform",
    }}
  />
))

Box.displayName = "Box"

const AnimatedBoxes = () => {
  const [boxes, setBoxes] = useState<Box[]>([])

  const generateBoxes = useCallback(() => {
    const newBoxes: Box[] = []
    const boxCount = Math.floor((window.innerWidth * window.innerHeight) / 80000) + 2 // Increased box count
    for (let i = 0; i < boxCount; i++) {
      const x = (Math.random() * 0.6 + 0.2) * window.innerWidth
      const y = (Math.random() * 0.6 + 0.2) * window.innerHeight
      newBoxes.push({
        id: i,
        x,
        y,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })
    }
    setBoxes(newBoxes)
  }, [])

  useEffect(() => {
    generateBoxes()
    window.addEventListener("resize", generateBoxes)
    return () => window.removeEventListener("resize", generateBoxes)
  }, [generateBoxes])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {boxes.map((box) => (
        <Box key={box.id} {...box} />
      ))}
    </div>
  )
}

export default AnimatedBoxes

