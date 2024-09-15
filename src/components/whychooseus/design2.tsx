'use client'

import { useState, useEffect, useRef, ComponentType } from 'react'
import { Shield, Zap, Heart, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

interface Feature {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export default function WhyChooseUsEnhancedTwo() {
  const [activeTab, setActiveTab] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const parallaxRef = useRef<HTMLDivElement | null>(null)

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

  const features: Feature[] = [
    {
      icon: Shield,
      title: 'Unmatched Security',
      description: 'State-of-the-art encryption and security measures to protect your data.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized infrastructure ensuring blazing fast performance.',
    },
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'Dedicated support and service that puts our customers first.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Seamless tools and features for effective team collaboration.',
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, TechCorp',
      quote:
        'Choosing this service was the best decision for our company. The security and speed are unmatched!',
    },
    {
      name: 'Jane Smith',
      role: 'CTO, InnovateCo',
      quote: 'The collaborative features have transformed how our team works. Highly recommended!',
    },
    {
      name: 'Alex Johnson',
      role: 'Founder, StartUpX',
      quote: "Customer support is phenomenal. They're always there when you need them.",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="flex space-x-4 mb-8">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeTab === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-800 text-blue-300 hover:bg-blue-700'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {feature.title}
                </button>
              ))}
            </div>
            <div className="bg-blue-800 bg-opacity-50 rounded-lg p-8 transform transition-all duration-300 hover:scale-105">
              {/* Extract the icon dynamically */}
              {React.createElement(features[activeTab].icon, {
                className: 'w-12 h-12 text-blue-400 mb-4',
              })}
              <h3 className="text-2xl font-semibold mb-4">{features[activeTab].title}</h3>
              <p className="text-blue-100">{features[activeTab].description}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">Our Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              <StatCounter end={1000} label="Happy Clients" />
              <StatCounter end={50} label="Countries Served" />
              <StatCounter end={99.9} label="Uptime Percentage" decimals={1} suffix="%" />
              <StatCounter end={24} label="Support Availability" suffix="/7" />
            </div>
          </div>
        </div>

        {/* <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-8">What Our Clients Say</h3>
          <div className="bg-blue-800 bg-opacity-50 rounded-lg p-8 relative">
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full text-white"
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev - 1 + testimonials.length) % testimonials.length,
                )
              }
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full text-white"
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="text-center px-12">
              <p className="text-xl italic mb-4">"{testimonials[currentTestimonial].quote}"</p>
              <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-blue-300">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
        </div> */}

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105"
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
