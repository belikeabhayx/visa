"use client"

import AboutSection from '@/components/circleabout/circle'
import { Footer } from '@/components/footer/footer'
import HeroSwiper from '@/components/hero/swiper'
import NavOne from '@/components/navbar/navone'
import NavTwo from '@/components/navbar/navtwo'
import React, { useEffect, useState } from 'react'
import NewsPage from './news/page'
import Component from '@/components/global/global'
import WhyChooseUsEnhancedOne from '@/components/whychooseus/design1'
import WhyChooseUsEnhancedTwo from '@/components/whychooseus/design2'
import Ticker from '@/components/ticker/ticker'
import {MediaMention} from '@/components/mediamention/mediamention'
import TestimonialsPage from '@/components/ClientTestimonial/design1'
import TestimonialsPage1 from '@/components/ClientTestimonial/design2'
import TestimonialsPage2 from '@/components/ClientTestimonial/design3'

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
    <>
      <div>
        <HeroSwiper />
        <div className="">
          <AboutSection />
        </div>
        {/* <WhyChooseUsEnhancedTwo/> */}
        <Component />
        <WhyChooseUsEnhancedOne />
        <Ticker />
        <MediaMention />
        {/* <TestimonialsPage />
        <TestimonialsPage1 /> */}
        <TestimonialsPage2 />
        {/* <NewsPage/> */}
        {/* {media.map((item) => (
        <img key={item.id} src={item.url} alt={item.alt} />
      ))} */}
        <Footer />
      </div>
    </>
  )
}

export default MediaComponent
