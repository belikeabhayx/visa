'use client'

import React, { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  end: number
  label: string
  duration?: number
  decimals?: number
  suffix?: string
}

const StatCounter: React.FC<StatCounterProps> = ({
  end,
  label,
  duration = 2000,
  decimals = 0,
  suffix = '',
}) => {
  const [count, setCount] = useState<number>(0)
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return

    let startTime: number | null = null
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration) {
        setCount(Math.min(end, (progress / duration) * end))
        animationFrame = requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, hasAnimated])

  return (
    <div
      className="relative text-center p-6 bg-blue-700 bg-opacity-30 rounded-xl backdrop-blur-sm"
      ref={ref}
    >
      <div
        className="absolute inset-0 bg-blue-400 rounded-xl opacity-20 animate-pulse"
        style={{ animation: 'pulse 3s infinite' }}
      />
      <p
        className="text-5xl md:text-6xl font-bold mb-2 text-blue-100 transition-all duration-500 ease-in-out"
        style={{
          animation: hasAnimated ? 'scaleIn 0.5s ease-out 0.2s both' : 'none',
        }}
      >
        {count.toFixed(decimals)}
        {suffix}
      </p>
      <p className="text-blue-200 text-xl font-medium">{label}</p>
    </div>
  )
}

const Ticker: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-16 shadow-2xl bg-blue-800 bg-opacity-20 backdrop-blur-lg border border-blue-400 border-opacity-20"
          style={{
            animation: 'fadeInDown 1s ease-out',
          }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-center text-blue-100 tracking-tight">
            Our Global{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Impact
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <StatCounter end={10000} label="Happy Clients" />
            <StatCounter end={100} label="Countries Served" />
            <StatCounter end={99.99} label="Uptime Percentage" decimals={2} suffix="%" />
            <StatCounter end={24} label="Support Availability" suffix="/7" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticker
