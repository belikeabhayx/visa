import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { Card } from '../cards/card'

interface MediaItem {
  url: string
  alt: string
}

export default function HeroSwiper() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/media')
        const { docs } = response.data

        if (Array.isArray(docs)) {
          const formattedMediaItems = docs.map((item: any) => ({
            url: item.url,
            alt: item.alt || `Image ${item.id}`,
          }))
          setMediaItems(formattedMediaItems)
        } else {
          throw new Error('Invalid response format')
        }
      } catch (error) {
        console.error('Error fetching media items:', error)
        setError('Failed to load media items.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="relative swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {mediaItems.map((item, index) => (
          <SwiperSlide key={index} style={{ height: '70vh', width: '70vw' }}>
            <img src={item.url} alt={item.alt} className="object-cover w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Positioning Card slightly over the Swiper */}
      <div className="absolute bottom-[-330px] left-1/2 transform -translate-x-1/2 z-10">
        <Card />
      </div>
    </div>
  )
}
