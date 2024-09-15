import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const NavItems = () => (
    <>
      <Link href="#home" className="text-sm font-medium hover:underline">
        Home
      </Link>
      <Link href="#about" className="text-sm font-medium hover:underline">
        About
      </Link>
      <Link href="#services" className="text-sm font-medium hover:underline">
        Services
      </Link>
      <Link href="/blogs" className="text-sm font-medium hover:underline">
        Blogs
      </Link>
      <Link href="#contact" className="text-sm font-medium hover:underline">
        Contact
      </Link>
    </>
  )

  return (
    <nav className="bg-[#3423A6] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Logo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItems />
            <Button className='bg-white text-black' size={'lg'}>Get Started</Button>
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
                <NavItems />
                <Button className="w-full">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
