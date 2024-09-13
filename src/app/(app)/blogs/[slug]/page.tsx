// src/app/(app)/blogs/[slug]/page.tsx

import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface BlogPost {
  id: number
  title: string
  content: {
    root: {
      children: Array<{
        children: Array<{
          text: string
        }>
      }>
    }
  }
  featuredImage: {
    url: string
  } | null
  slug: string | null
  publishedDate: string | null
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `http://localhost:3000/api/blog-posts?where[slug][equals]=${slug}`,
      { next: { revalidate: 60 } },
    )
    if (!response.ok) {
      throw new Error('Failed to fetch blog post')
    }
    const data = await response.json()
    return data.docs[0] || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const content = post.content.root.children
    .map((child) => child.children.map((c) => c.text).join(''))
    .join('\n')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.publishedDate && (
        <p className="text-gray-600 mb-4">{new Date(post.publishedDate).toLocaleDateString()}</p>
      )}
      {post.featuredImage && (
        <div className="mb-8">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            width={800}
            height={400}
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="prose max-w-none whitespace-pre-wrap">{content}</div>
    </div>
  )
}
