"use client"
import { Card} from '@/components/cards/card'
import AboutSection from '@/components/circleabout/circle'
import { Footer } from '@/components/footer/footer'
import HeroSwiper from '@/components/hero/swiper'
import NavOne from '@/components/navbar/navone'
import NavTwo from '@/components/navbar/navtwo'
import React, { useEffect, useState } from 'react'

interface MediaItem {
  id: string
  url: string
  alt?: string
  mimeType: string
}

const MediaComponent = () => {
  const [media, setMedia] = useState<MediaItem[]>([])

  useEffect(() => {
    const fetchMedia = async () => {
      const res = await fetch(`/api/media`)
      const data = await res.json()
      setMedia(data.docs)
    }
    fetchMedia()
  }, [])

  return (
    <div>
      <NavOne />
      <NavTwo />
      <HeroSwiper />
      <div className=''>
        <AboutSection />
      </div>
      {/* {media.map((item) => (
        <img key={item.id} src={item.url} alt={item.alt} />
      ))} */}
      <Footer />
    </div>
  )
}

export default MediaComponent
