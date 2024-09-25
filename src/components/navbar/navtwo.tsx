'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'

interface NavItem {
  title: string
  href: string
  subItems?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: 'Immigrate',
    href: '#immigrate',
    subItems: [
      {
        title: 'Express Entry',
        href: '#express-entry',
        subItems: [
          { title: 'Federal Skilled Worker', href: '#federal-skilled-worker' },
          { title: 'Canadian Experience Class', href: '#canadian-experience-class' },
        ],
      },
      {
        title: 'Family Sponsorship',
        href: '#family-sponsorship',
        subItems: [
          { title: 'Spouse Sponsorship', href: '#spouse-sponsorship' },
          { title: 'Parent and Grandparent Sponsorship', href: '#parent-grandparent-sponsorship' },
        ],
      },
    ],
  },
  {
    title: 'Services',
    href: '#services',
    subItems: [
      {
        title: 'Visa Application',
        href: '#visa-application',
        subItems: [
          { title: 'Student Visa', href: '#student-visa' },
          { title: 'Work Permit', href: '#work-permit' },
        ],
      },
      { title: 'Document Translation', href: '#document-translation' },
    ],
  },
  {
    title: 'PNP Program',
    href: '#pnp-program',
    subItems: [
      {
        title: 'Ontario PNP',
        href: '#ontario-pnp',
        subItems: [
          { title: 'Skilled Worker Stream', href: '#ontario-skilled-worker' },
          { title: 'International Student Stream', href: '#ontario-international-student' },
        ],
      },
      {
        title: 'British Columbia PNP',
        href: '#bc-pnp',
        subItems: [
          { title: 'Skills Immigration', href: '#bc-skills-immigration' },
          { title: 'Express Entry BC', href: '#express-entry-bc' },
        ],
      },
    ],
  },
  { title: 'Point Calculator', href: '/point-calculator' },
  {
    title: 'Resource',
    href: '#resource',
    subItems: [
      { title: 'News', href: '/news' },
      { title: 'Blogs', href: '/blogs' },
      { title: 'Testimonials', href: '/test'},
    ],
  },
  { title: 'About Us', href: '#about-us' },
  { title: 'Contact Us', href: '#contact-us' },
]

const DesktopNavItem: React.FC<{ item: NavItem; level?: number }> = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navItemRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 100)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={navItemRef}
    >
      <Link
        href={item.href}
        className={`text-sm font-medium hover:text-primary-foreground flex items-center py-2 px-3 rounded-md transition-colors duration-200 ${
          isOpen ? 'bg-primary text-primary-foreground' : 'text-white hover:bg-primary/10'
        }`}
      >
        {item.title}
        {item.subItems && <ChevronDown className="ml-1 h-4 w-4" />}
      </Link>
      {item.subItems && isOpen && (
        <div
          className={`absolute ${
            level === 0 ? 'left-0 top-full' : 'left-full top-0'
          } mt-0 w-56 rounded-md shadow-lg bg-blue-950 ring-1 ring-black ring-opacity-5 z-10`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {item.subItems.map((subItem) => (
              <DesktopNavItem key={subItem.href} item={subItem} level={level + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const MobileNavItem: React.FC<{ item: NavItem; level?: number }> = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`pl-${level * 4}`}>
      <div
        className="flex items-center justify-between py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Link href={item.href} className="text-sm font-medium text-gray-800 hover:text-primary">
          {item.title}
        </Link>
        {item.subItems && (
          <ChevronRight
            className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          />
        )}
      </div>
      {item.subItems && isOpen && (
        <div className="mt-2 space-y-2">
          {item.subItems.map((subItem) => (
            <MobileNavItem key={subItem.href} item={subItem} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#3423A6] p-3 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center h-[70px] w-[70px] bg-white rounded-full">
            <Link href="/" className="text-2xl font-bold ">
              <Image src={'/logo/logo.webp'} alt={'aa'} width={60} height={20} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <DesktopNavItem key={item.href} item={item} />
            ))}
            <Button className="bg-white text-black hover:bg-gray-100" size="lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <MobileNavItem key={item.href} item={item} />
                ))}
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
