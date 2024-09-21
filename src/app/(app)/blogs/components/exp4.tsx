import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface BlogCardProps {
  imageUrl?: string
  title?: string
  date?: string
  author?: string
  description?: string
  readMoreUrl?: string
}

export default function Component3({
  imageUrl = '/flags/uk.png',
  title = 'The Future of Web Development',
  date = '2023-06-15',
  author = 'Jane Doe',
  description = 'Explore the latest trends and technologies shaping the future of web development. This article dives deep into emerging frameworks and methodologies.',
  readMoreUrl = '#',
}: BlogCardProps = {}) {
  return (
    <Card className="max-w-sm overflow-hidden mx-auto my-10">
      <div className="relative h-64">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <span className="text-sm text-gray-300">{author}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <time dateTime={date} className="text-sm text-gray-500 block mb-4">
          {new Date(date).toLocaleDateString()}
        </time>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <a href={readMoreUrl}>Read More</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
