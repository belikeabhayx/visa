import { Card, CardContent } from '@/components/ui/card'
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

export default function Component1({
  imageUrl = '/flags/uk.png',
  title = 'The Future of Web Development',
  date = '2023-06-15',
  author = 'Jane Doe',
  description = 'Explore the latest trends and technologies shaping the future of web development. This article dives deep into emerging frameworks and methodologies.',
  readMoreUrl = '#',
}: BlogCardProps = {}) {
  return (
    <Card className="overflow-hidden mx-auto my-10 container ">
      <div className="md:flex">
        <div className="md:w-1/3 relative h-48 md:h-auto">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <CardContent className="md:w-2/3 p-6">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {author}
          </div>
          <h2 className="mt-2 text-xl font-semibold leading-tight">{title}</h2>
          <time dateTime={date} className="block mt-1 text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </time>
          <p className="mt-4 text-gray-500">{description}</p>
          <Button asChild className="mt-4">
            <a href={readMoreUrl}>Read More</a>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
