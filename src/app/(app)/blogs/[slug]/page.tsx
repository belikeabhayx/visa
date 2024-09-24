// src/app/(app)/blogs/[slug]/page.tsx

import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Define the types for the content structure
interface ContentBlock {
  type: string
  children?: Array<ContentBlock>
  text?: string
  mode?: string
  [key: string]: any
}

interface BlogPost {
  id: number
  title: string
  description: string
  content: {
    root: {
      children: Array<ContentBlock>
    }
  }
  featuredImage: {
    url: string
    alt?: string
  } | null
  slug: string | null
  publishedDate: string | null
  author: {
    email: string
  } | null
  flexibleContent: Array<{
    blockType: string
    text?: {
      root: {
        children: Array<ContentBlock>
      }
    }
    quote?: string
    author?: string
    image?: {
      url: string
      alt?: string
      width: number
      height: number
    }
    table?: Array<{
      row: Array<{
        cell: string
      }>
    }>
  }>
}

// Fetch the blog post based on the slug parameter
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

// Function to render nested content blocks
const renderContent = (blocks: Array<ContentBlock>): React.ReactNode => {
  return blocks.map((block, index) => {
    if (block.type === 'text' && block.text) {
      return (
        <p key={index} className="mb-4">
          {block.text}
        </p>
      )
    }

    if (block.children) {
      return <div key={index}>{renderContent(block.children)}</div>
    }

    return <div key={index}>Unknown block type</div>
  })
}

// Function to render flexible content blocks
const renderFlexibleContent = (blocks: BlogPost['flexibleContent']): React.ReactNode => {
  return blocks.map((block, index) => {
    switch (block.blockType) {
      case 'textBlock':
        return (
          <div key={index} className="my-4 p-4 bg-gray-100 rounded-md">
            {block.text && renderContent(block.text.root.children)}
          </div>
        )
      case 'quoteBlock':
        return (
          <blockquote
            key={index}
            className="my-4 p-4 bg-gray-200 border-l-4 border-blue-500 rounded-md"
          >
            <p className="text-lg italic">{block.quote}</p>
            <footer className="mt-2 text-sm text-gray-600">— {block.author}</footer>
          </blockquote>
        )
      case 'imageBlock':
        return (
          <div key={index} className="my-4 flex justify-center">
            <Image
              src={block.image!.url}
              alt={block.image?.alt || 'Image'}
              width={block.image!.width}
              height={block.image!.height}
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
            />
          </div>
        )
      case 'tableBlock':
        return (
          <div key={index} className="my-4 overflow-auto bg-gray-50 rounded-md">
            <table className="min-w-full border-collapse border border-gray-200">
              <tbody>
                {block.table!.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-gray-200">
                    {row.row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-2 border-r border-gray-200">
                        {cell.cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      default:
        return <div key={index}>Unknown block type</div>
    }
  })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Post Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Post Meta Information */}
      {post.publishedDate && (
        <p className="text-gray-600 mb-2">
          Published on: {new Date(post.publishedDate).toLocaleDateString()}
        </p>
      )}
      {post.author && <p className="text-gray-600 mb-4">Author: {post.author.email}</p>}

      {/* Post Description */}
      {post.description && <p className="text-lg mb-6">{post.description}</p>}

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="mb-8">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt || post.title}
            width={800}
            height={400}
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
      )}

      {/* Main Content */}
      <div className="prose max-w-none whitespace-pre-wrap">
        {renderContent(post.content.root.children)}
      </div>

      {/* Flexible Content */}
      <div className="mt-8">{renderFlexibleContent(post.flexibleContent)}</div>
    </div>
  )
}
