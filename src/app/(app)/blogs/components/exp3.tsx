import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface BlogCardProps {
  imageUrl?: string
  title?: string
  date?: string
  author?: string
  description?: string
  readMoreUrl?: string
}

export default function Component2({
  imageUrl = '/flags/uk.png',
  title = 'The Future of Web Development',
  date = '2023-06-15',
  author = 'Jane Doe',
  description = 'Explore the latest trends and technologies shaping the future of web development. This article dives deep into emerging frameworks and methodologies.',
  readMoreUrl = '#',
}: BlogCardProps = {}) {
  return (
    <Card className="max-w-sm overflow-hidden group mx-auto my-10">
      <div className="relative h-48 bg-gray-200">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
            Hover to reveal
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
          <span>{author}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={readMoreUrl}
          className="text-indigo-500 hover:text-indigo-600 transition-colors duration-300"
        >
          Read More →
        </a>
      </CardContent>
    </Card>
  )
}
