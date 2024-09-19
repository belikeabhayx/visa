import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import Card from '../cards/card'

interface MediaItem {
  url: string
  alt: string
}

export default function HeroSwiper() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalImages, setTotalImages] = useState(0)

 const countries = [
   {
     country: 'Canada',
     flagUrl: '/flags/canada.jpg',
     visaOptions: [
       'Canada Express Entry',
       '67 Points Calculator',
       'CRS Calculator',
       'Business Investor Visa',
       'Provincial Nominee Program',
       'Family Immigration',
     ],
   },
   {
     country: 'Australia',
     flagUrl: '/flags/aus.jpg',
     visaOptions: [
       'Australia Skilled Occupation List',
       'Employer Nomination Visa',
       'Australia 65 Points Calculator',
       'Australia Visa From India',
       'Skilled Nominated Visa',
       'Skilled Independent Visa',
     ],
   },
   {
     country: 'Germany',
     flagUrl: '/flags/germany.png',
     visaOptions: [
       'Visitor Visa',
       'Student Visa',
       'Business Visa',
       'Job Seeker Visa',
       'Germany Immigration',
       'Germany Points Calculator',
     ],
   },
 ]

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

      {/* Positioning Card slightly over the Swiper */}
      <div className="absolute bottom-[-330px] left-1/2 transform -translate-x-1/2 z-10 flex gap-x-8">
        {countries.map((countryData) => (
          <Card
            key={countryData.country}
            country={countryData.country}
            flagUrl={countryData.flagUrl}
            visaOptions={countryData.visaOptions}
          />
        ))}
      </div>
    </div>
  )
}
