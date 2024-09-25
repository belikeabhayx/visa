import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, Globe, FileText, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type NewsItem = {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: 'news' | 'blog' | 'update'
  icon: 'Globe' | 'FileText' | 'TrendingUp'
}

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

const newsItems: NewsItem[] = [
  // ... (keep your existing newsItems array)
]

const iconComponents = {
  Globe,
  FileText,
  TrendingUp,
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

const MagazineStyleNews = async () => {
  const blogPosts = await getBlogPosts()

  // Sort blog posts by publishedDate in descending order
  const sortedBlogPosts = blogPosts.sort((a, b) => {
    return new Date(b.publishedDate || '').getTime() - new Date(a.publishedDate || '').getTime()
  })

  // Combine sorted blog posts with news items
  const combinedItems = [
    ...sortedBlogPosts.map((post) => ({
      id: post.id.toString(),
      title: post.title,
      excerpt: post.description,
      image: post.featuredImage?.url || '/placeholder-image.jpg',
      date: post.publishedDate || 'No date',
      category: 'blog' as const,
      icon: 'FileText' as const,
      slug: post.slug,
    })),
    ...newsItems,
  ]

  // Sort combined items to ensure the latest is first
  const sortedItems = combinedItems.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const latestItem = sortedItems[0]
  const restItems = sortedItems.slice(1)

  return (
    <section className="w-full py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tighter mb-8 text-center text-primary">
          Latest News & Insights
        </h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="update">Updates</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Latest Item */}
              <Card className="md:col-span-2 overflow-hidden">
                <div className="md:flex">
                  <Image
                    src={latestItem.image}
                    alt={latestItem.title}
                    width={600}
                    height={400}
                    className="object-cover w-full md:w-1/2 h-64 md:h-auto"
                  />
                  <div className="p-6 md:w-1/2">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">{latestItem.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{latestItem.excerpt}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2">{latestItem.date}</span>
                        <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs">
                          {latestItem.category}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/${latestItem.category}/${latestItem.slug || latestItem.id}`}
                        passHref
                      >
                        <Button variant="outline">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </div>
                </div>
              </Card>
              {/* Rest of the Items */}
              {restItems.map((item) => {
                const IconComponent = iconComponents[item.icon]
                return (
                  <Card key={item.id} className="overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-48"
                    />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/${item.category}/${item.slug || item.id}`}
                        passHref
                        className="w-full"
                      >
                        <Button variant="outline" className="w-full">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
          <TabsContent value="news">{/* Filter and display only news items */}</TabsContent>
          <TabsContent value="blog">{/* Filter and display only blog items */}</TabsContent>
          <TabsContent value="update">{/* Filter and display only update items */}</TabsContent>
        </Tabs>
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

export default MagazineStyleNews
