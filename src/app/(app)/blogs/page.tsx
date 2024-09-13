// src/app/(app)/blogs/page.tsx

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  id: number
  title: string
  description: string
  featuredImage: {
    url: string
  } | null
  slug: string | null
  publishedDate: string | null
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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>
        <p>No posts found. Please check back later.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link href={`/blogs/${post.slug || post.id}`} key={post.id}>
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {post.featuredImage && (
                <Image
                  src={post.featuredImage.url}
                  alt={post.title}
                  width={400}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
                {post.publishedDate && (
                  <p className="text-sm text-gray-500 mt-2">
                    Published on: {new Date(post.publishedDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
