"use client"

import { useEffect, useState } from "react"
import type * as THREE from "three"

export function useThree() {
  const [three, setThree] = useState<typeof THREE | null>(null)

  useEffect(() => {
    import("three").then((THREE) => {
      setThree(THREE)
    })
  }, [])

  return three
}

