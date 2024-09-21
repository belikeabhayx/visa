import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
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


export default function Component({
  imageUrl = '/flags/uk.png',
  title = 'The Future of Web Development',
  date = '2023-06-15',
  author = 'Jane Doe',
  description = 'Explore the latest trends and technologies shaping the future of web development.',
  readMoreUrl = '#',
}: BlogCardProps = {}): React.ReactElement {
  return (
    <Card className="max-w-sm overflow-hidden mx-auto">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <CardHeader>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
          <span>By {author}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={readMoreUrl}>Read More</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
