'use client'
import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
// import Autoplay from 'embla-carousel-autoplay'

const imageLinks = [
  { src: '/carousel/interior.webp', href: '/interior-painting' },
  { src: '/carousel/exterior.jpg', href: '/exterior-painting' },
  { src: '/carousel/waterproofing.jpeg', href: '/waterproofing' },
  { src: '/carousel/woodcoating.jpg', href: '/woodcoating' },
  { src: '/carousel/texture.jpg', href: '/wall-texture' },
  { src: '/carousel/wallpaper.jpg', href: '/wallpapers' },
]

const titles = [
  'Interior Painting',
  'Exterior Painting',
  'WaterProofing',
  'Wood Coating',
  'Wall Textures',
  'Wallpapers',
]

export function MediaMention() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="text-center mb-8">
        <div className="text-indigo-950 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-4">
          Our Media Mention
        </div>
      </div>
      <div className="relative w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
      
          className="relative"
        >
          <CarouselContent className="flex">
            {imageLinks.map(({ src, href }, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 sm:w-1/2 sm:flex-grow lg:basis-1/4 p-2"
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-48 sm:h-56 md:h-64">
                    <Image
                      src={src}
                      alt={`Gallery ${index}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </a>
                {/* <div className="text-center mt-2 text-sm sm:text-base md:text-lg font-bold text-indigo-950 uppercase">
                  {titles[index]}
                </div> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 text-indigo-950" />
          <CarouselNext className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 text-indigo-950" />
        </Carousel>
      </div>
    </div>
  )
}