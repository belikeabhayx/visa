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

type MediaLogo = {
  src: {
    url: string // URL of the image
  }
  alt: string
  href: string
}

// Define the API endpoint
const API_ENDPOINT = '/api/media-logos' // Update with your actual API endpoint

export function MediaMention() {
  const [mediaLogos, setMediaLogos] = React.useState<MediaLogo[]>([])

  React.useEffect(() => {
    // Fetch the media logos data from the API
    const fetchMediaLogos = async () => {
      try {
        const response = await fetch(API_ENDPOINT)
        const data = await response.json()

        // Check if the API returned the correct format
        if (data && data.docs) {
          setMediaLogos(data.docs)
        }
      } catch (error) {
        console.error('Error fetching media logos:', error)
      }
    }

    fetchMediaLogos()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center py-12 px-4 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-indigo-950 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-4">
          As Featured In
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our innovative solutions have been recognized by leading media outlets across the globe.
        </p>
      </div>
      <div className="w-full max-w-screen-xl mx-auto">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {mediaLogos.map((logo, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                <div className="p-4">
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                  >
                    <div className="relative w-full h-20">
                      <Image
                        src={logo.src.url} // Use the image URL from the API response
                        alt={logo.alt}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  )
}
