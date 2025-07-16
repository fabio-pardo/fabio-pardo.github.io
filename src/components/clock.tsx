'use client'

import { useEffect, useState } from 'react'

export function Clock() {
  const [time, setTime] = useState<string>('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateClock = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString())
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  // Avoid hydration mismatch by not rendering time until mounted
  if (!mounted) {
    return <span>--:--:--</span>
  }

  return <span>{time}</span>
} 