import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AboutSection = () => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get('api/circle')
        console.log('API response:', response.data)
        if (response.data.docs && response.data.docs.length > 0) {
          setImageUrl(response.data.docs[0].url)
        } else {
          console.error('No image data found in the API response')
        }
      } catch (error) {
        console.error('Error fetching image URL:', error)
      }
    }

    fetchImageUrl()
  }, [])

  return (
    <section className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 p-12 mt-64 transform scale-90">
      {/* Left Side - Circle Image */}
      <div className="w-64 h-64 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Company Logo"
            className="w-full h-full object-cover"
            onError={(e) => console.error('Image failed to load:', e)}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-white">Loading...</span>
          </div>
        )}
      </div>

      {/* Right Side - About Section */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold">About Provine</h2>
        <p className="text-gray-700 text-sm mt-2">
          Nationwide Immigration Services is one of India's best immigration consulting companies.
          Established in 2007 in Canada from a small office, our company has registered exponential
          growth and success in the past few years...{' '}
          <a href="#" className="text-red-500 font-semibold">
            Read More
          </a>
        </p>

        {/* Progress Bars */}
        <div className="mt-4 space-y-3">
          {/* PR Visa Success Rate */}
          <div className="flex justify-between items-center">
            <span className="text-sm">PR Visa Success Rate</span>
            <span className="text-sm font-bold">100%</span>
          </div>
          <div className="w-full bg-gray-300 h-2 rounded-full">
            <div className="bg-red-600 h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>

          {/* Client Service Satisfaction */}
          <div className="flex justify-between items-center">
            <span className="text-sm">Client Service Satisfaction</span>
            <span className="text-sm font-bold">100%</span>
          </div>
          <div className="w-full bg-gray-300 h-2 rounded-full">
            <div className="bg-red-600 h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>

          {/* Transparency */}
          <div className="flex justify-between items-center">
            <span className="text-sm">Transparency</span>
            <span className="text-sm font-bold">100%</span>
          </div>
          <div className="w-full bg-gray-300 h-2 rounded-full">
            <div className="bg-red-600 h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
