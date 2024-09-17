'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Country {
  name: string
  image: string
  flag: string
}

interface Category {
  name: string
  countries: Country[]
}

const categories = [
  {
    name: 'Education',
    emoji: '🎓',
    countries: [
      { name: 'USA', image: '/flags/image.png', flag: 'https://flagcdn.com/w80/mv.png' },
      { name: 'UK', image: '/flags/uk.png', flag: 'https://flagcdn.com/w80/mv.png' },
      { name: 'Canada', image: '/flags/uk.png', flag: 'https://flagcdn.com/w80/mv.png' },
      { name: 'Australia', image: '/flags/uk.png', flag: 'https://flagcdn.com/w80/mv.png' },
    ],
  },
  {
    name: 'Immigration',
    emoji: '✈️',
    countries: [
      { name: 'Canada', image: '/images/canada.png' },
      { name: 'New Zealand', image: '/images/new-zealand.png' },
      { name: 'Germany', image: '/images/germany.png' },
      { name: 'Sweden', image: '/images/sweden.png' },
    ],
  },
  {
    name: 'Business',
    emoji: '💼',
    countries: [
      { name: 'Singapore', image: '/images/singapore.png' },
      { name: 'UAE', image: '/images/uae.png' },
      { name: 'Netherlands', image: '/images/netherlands.png' },
      { name: 'Switzerland', image: '/images/switzerland.png' },
    ],
  },
  {
    name: 'Tourist',
    emoji: '🌴',
    countries: [
      { name: 'France', image: '/images/france.png' },
      { name: 'Japan', image: '/images/japan.png' },
      { name: 'Italy', image: '/images/italy.png' },
      { name: 'Thailand', image: '/images/thailand.png' },
    ],
  },
]

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Education')

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory((prevCategory) => (prevCategory === categoryName ? null : categoryName))
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Your Gateway to Global Opportunities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {categories.map((category) => (
          <Card
            key={category.name}
            className={`cursor-pointer transition-all duration-300 ${
              selectedCategory === category.name ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <CardHeader className="flex flex-col items-center">
              <span className="text-4xl mb-4" role="img" aria-label={category.name}>
                {category.emoji}
              </span>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          selectedCategory ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'
        }`}
      >
        {selectedCategory && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Best Countries for {selectedCategory}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories
                .find((c) => c.name === selectedCategory)
                ?.countries.map((country) => (
                  <Card
                    key={country.name}
                    className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-4 border-primary/20 rounded-lg"
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <img
                          src={country.image}
                          alt={country.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                          <h3 className="text-xl font-semibold text-white drop-shadow-md">
                            {country.name}
                          </h3>
                          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                            <img
                              src={country.flag}
                              alt={`Flag of ${country.name}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
