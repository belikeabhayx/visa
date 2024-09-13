import React from 'react';
import Image from 'next/image';

const BlogPostPage = ({ post }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{new Date(post.publishedDate).toLocaleDateString()}</p>
      {post.featuredImage && (
        <div className="mb-8">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            width={800}
            height={400}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPostPage;