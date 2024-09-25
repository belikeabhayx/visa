'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const StatCounter = ({ end, label, duration = 2000, decimals = 0, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          controls.start('visible')
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
  }, [hasAnimated, controls])

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
    <motion.div
      className="relative text-center p-6 bg-blue-700 bg-opacity-30 rounded-xl backdrop-blur-sm"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
    >
      <motion.div
        className="absolute inset-0 bg-blue-400 rounded-xl opacity-20"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.p
        className="text-5xl md:text-6xl font-bold mb-2 text-blue-100"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {count.toFixed(decimals)}
        {suffix}
      </motion.p>
      <p className="text-blue-200 text-xl font-medium">{label}</p>
    </motion.div>
  )
}

const Ticker = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-3xl p-8 md:p-16 shadow-2xl bg-blue-800 bg-opacity-20 backdrop-blur-lg border border-blue-400 border-opacity-20"
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
        </motion.div>
      </div>
    </div>
  )
}

export default Ticker
