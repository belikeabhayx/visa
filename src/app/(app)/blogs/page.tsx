import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BlogBanner from './components/banner'
import { CalendarIcon, UserIcon, ArrowRightIcon } from 'lucide-react'
import Component from './components/exp1'
import Component1 from './components/exp2'
import Component2 from './components/exp3'
import Component3 from './components/exp4'
import EnhancedNewsAndBlogs from '@/components/NewsBlog/design1'
import MagazineStyleNews from './components/pagetemplate'

interface BlogPost {
  id: number
  title: string
  description: string
  featuredImage: {
    url: string
  } | null
  slug: string | null
  publishedDate: string | null
  author: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('http://localhost:3000/api/blog-posts', {
      next: { revalidate: 60 },
    })
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    const data = await response.json()
    return data.docs
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function BlogsPage() {
  const posts = await getBlogPosts()

  if (posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Latest Blog Posts</h1>
        <p className="text-xl text-center text-gray-600">
          No posts found. Please check back later.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* <BlogBanner /> */}
      <MagazineStyleNews />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-800 leading-tight">
          Explore Our <span className="text-blue-600">Latest</span> Insights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <Link href={`/blogs/${post.slug || post.id}`} key={post.id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col max-w-sm">
                {post.featuredImage && (
                  <div className="relative h-60 w-full">
                    <Image
                      src={post.featuredImage.url}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h2 className="text-2xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                      <div className="flex items-center text-sm">
                        <UserIcon className="h-4 w-4 mr-2" />
                        <span>{post.author || 'Unknown Author'}</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-6 flex-grow">
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                  {post.publishedDate && (
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
                <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
                  <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300">
                    Read more
                  </span>
                  <ArrowRightIcon className="h-5 w-5 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
