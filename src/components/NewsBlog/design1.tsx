'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Globe, FileText, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

type NewsItem = {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: 'news' | 'blog' | 'update'
  icon: 'Globe' | 'FileText' | 'TrendingUp'
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'New Visa Regulations for 2023',
    excerpt:
      'Important changes to visa applications process starting next month. Learn how these updates might affect your immigration plans.',
    image:
      'https://kcxqbkwxvnlhzxvwlnpv.supabase.co/storage/v1/object/public/images/visa-regulations.jpg',
    date: '2023-05-15',
    category: 'news',
    icon: 'Globe',
  },
  {
    id: '2',
    title: 'Top 5 Tips for a Successful Visa Interview',
    excerpt:
      'Prepare for your visa interview with these expert tips. Increase your chances of approval with our comprehensive guide.',
    image:
      'https://kcxqbkwxvnlhzxvwlnpv.supabase.co/storage/v1/object/public/images/visa-interview.jpg',
    date: '2023-05-10',
    category: 'blog',
    icon: 'FileText',
  },
  {
    id: '3',
    title: 'Immigration Policy Updates',
    excerpt:
      'Recent changes in immigration policies and how they might affect you. Stay informed about the latest developments in immigration law.',
    image:
      'https://kcxqbkwxvnlhzxvwlnpv.supabase.co/storage/v1/object/public/images/policy-updates.jpg',
    date: '2023-05-05',
    category: 'update',
    icon: 'TrendingUp',
  },
]

const iconComponents = {
  Globe,
  FileText,
  TrendingUp,
}

const EnhancedNewsAndBlogs = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'news' | 'blog' | 'update'>('all')
  const [animatedItems, setAnimatedItems] = useState<string[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems(newsItems.map((item) => item.id))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const filteredItems =
    activeCategory === 'all'
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory)

  return (
    <section className="w-full py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tighter mb-8 text-center text-primary">
          Latest News & Insights
        </h2>
        <div className="flex justify-center mb-8 space-x-2">
          {['all', 'news', 'blog', 'update'].map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category as 'all' | 'news' | 'blog' | 'update')}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const IconComponent = iconComponents[item.icon]
            return (
              <Card
                key={item.id}
                className={`flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  animatedItems.includes(item.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-bl-lg p-2">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold line-clamp-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href={`/${item.category}/${item.id}`} passHref className="w-full">
                    <Button variant="outline" className="w-full group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <Link href="/all-posts" passHref>
            <Button size="lg" className="font-semibold">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EnhancedNewsAndBlogs;
