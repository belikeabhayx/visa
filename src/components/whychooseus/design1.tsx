'use client'

import { useState, useEffect, useRef } from 'react'
import { Shield, Zap, Heart, Users, Clock, Globe } from 'lucide-react'

export default function WhyChooseUsEnhancedOne() {
   const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: Shield,
      title: 'Unmatched Security',
      description:
        'State-of-the-art encryption and multi-layered security measures to protect your sensitive data. Our systems are regularly audited and updated to stay ahead of potential threats.',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description:
        'Experience blazing fast load times and responsive interactions. Our optimized infrastructure and efficient codebase ensure your applications run at peak performance.',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Heart,
      title: 'Customer-Centric Approach',
      description:
        'We put our customers first with dedicated support, personalized solutions, and a commitment to your success. Our team is always ready to go the extra mile for you.',
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      icon: Users,
      title: 'Seamless Collaboration',
      description:
        'Foster teamwork with our intuitive collaboration tools. Real-time editing, version control, and communication features make working together effortless and productive.',
      gradient: 'from-blue-700 to-blue-900',
    },
    {
      icon: Clock,
      title: '24/7 Reliability',
      description:
        'Count on us around the clock. With 99.99% uptime guarantee and continuous monitoring, your services will remain operational, no matter the time or day.',
      gradient: 'from-blue-800 to-blue-600',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        'Expand your horizons with our worldwide network. Benefit from low-latency connections and localized content delivery to serve your global audience effectively.',
      gradient: 'from-blue-900 to-blue-700',
    },
  ]

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden" ref={parallaxRef}>
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-400 opacity-10 rounded-full filter blur-3xl transform rotate-45"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-300 opacity-10 rounded-full filter blur-3xl transform -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 relative">
          Why Choose Us
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-blue-400 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} rounded-lg p-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-800 bg-opacity-50 rounded-lg p-8 shadow-2xl mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCounter end={10000} label="Happy Clients" />
            <StatCounter end={100} label="Countries Served" />
            <StatCounter end={99.99} label="Uptime Percentage" decimals={2} suffix="%" />
            <StatCounter end={24} label="Support Availability" suffix="/7" />
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 transform hover:scale-105 text-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}

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
