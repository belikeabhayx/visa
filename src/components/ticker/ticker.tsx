import React, { useEffect, useRef, useState } from 'react'

const Ticker = () => {

    function StatCounter({ end, label, duration = 2000, decimals = 0, suffix = '' }) {
      const [count, setCount] = useState(0)
      const [hasAnimated, setHasAnimated] = useState(false)
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

        let startTime
        let animationFrame

        const updateCount = (timestamp) => {
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
        <div className="text-center" ref={ref}>
          <p className="text-3xl font-bold mb-2">
            {count.toFixed(decimals)}
            {suffix}
          </p>
          <p className="text-blue-300">{label}</p>
        </div>
      )
    }
    
  return (
    <div className="mt-10 bg-opacity-50 rounded-lg p-8 shadow-2xl mb-16 container mx-auto">
      <h3 className="text-6xl font-semibold mb-12 text-center">Our Impact</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCounter end={10000} label="Happy Clients" />
        <StatCounter end={100} label="Countries Served" />
        <StatCounter end={99.99} label="Uptime Percentage" decimals={2} suffix="%" />
        <StatCounter end={24} label="Support Availability" suffix="/7" />
      </div>
    </div>

    
  )
}

export default Ticker