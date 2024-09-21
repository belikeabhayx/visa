"use client"
import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'

interface MediaItem {
  url: string
  alt: string
}

export default function BlogBanner() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalImages, setTotalImages] = useState(0)

  const fetchImages = useCallback(
    async (startIndex: number, count: number) => {
      try {
        const response = await axios.get(`/api/homepage-banner?index=${startIndex}&limit=${count}`)
        const { docs, totalDocs } = response.data

        if (Array.isArray(docs)) {
          const newItems = docs.map((item: any, index: number) => ({
            url: item.image.url,
            alt: item.image.alt || `Image ${startIndex + index + 1}`,
          }))

          setMediaItems((prevItems) => {
            const updatedItems = [...prevItems]
            newItems.forEach((item, index) => {
              updatedItems[startIndex + index] = item
            })
            return updatedItems
          })

          if (totalDocs && totalImages === 0) {
            setTotalImages(totalDocs)
          }
        }
      } catch (error) {
        console.error(`Error fetching images starting at index ${startIndex}:`, error)
      }
    },
    [totalImages],
  )

  useEffect(() => {
    const initializeSwiper = async () => {
      try {
        // Fetch the first batch of images (e.g., first 3)
        await fetchImages(0, 3)
        setLoading(false)
      } catch (error) {
        console.error('Error initializing swiper:', error)
        setError('Failed to load initial images.')
        setLoading(false)
      }
    }

    initializeSwiper()
  }, [fetchImages])

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.realIndex
    const itemsToPreload = 2 // Number of items to preload ahead

    for (let i = 1; i <= itemsToPreload; i++) {
      const nextIndex = (currentIndex + i) % totalImages
      if (!mediaItems[nextIndex]) {
        fetchImages(nextIndex, 1)
      }
    }
  }

  if (loading) {
    return (
      <div className="relative swiper-container">
        <Skeleton className="w-full h-[70vh] rounded-lg" />
      </div>
    )
  }
  if (error) return <div>{error}</div>

  return (
       <div className="relative swiper-container">
      {/* Contact Form Directly Visible */}
      <div className="absolute top-10 right-44 m-4 p-4 bg-white shadow-lg rounded-lg z-10 w-[300px]">
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <form>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Input id="message" placeholder="Your Message" />
          </div>
          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {Array.from({ length: totalImages }).map((_, index) => (
          <SwiperSlide key={index} style={{ height: '70vh', width: '70vw' }}>
            {mediaItems[index] ? (
              <img
                src={mediaItems[index].url}
                alt={mediaItems[index].alt}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                Loading...
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}