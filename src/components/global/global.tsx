'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const categories = [
  { name: 'Education',   emoji: '🎓', countries: ['USA', 'UK', 'Canada', 'Australia'] },
  { name: 'Immigration', emoji: '✈️', countries: ['Canada', 'New Zealand', 'Germany', 'Sweden'] },
  { name: 'Business',    emoji: '💼', countries: ['Singapore', 'UAE', 'Netherlands', 'Switzerland'] },
  { name: 'Tourist',     emoji: '🌴', countries: ['France', 'Japan', 'Italy', 'Thailand'] },
]

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories
                .find((c) => c.name === selectedCategory)
                ?.countries.map((country) => (
                  <Card key={country} className="bg-secondary">
                    <CardHeader>
                      <CardTitle className="text-center">{country}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
