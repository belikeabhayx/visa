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

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'New Visa Regulations for 2023',
    excerpt:
      'Important changes to visa applications process starting next month. Learn how these updates might affect your immigration plans.',
    image:
      'https://kcxqbkwxvnlhzxvwlnpv.supabase.co/storage/v1/object/public/images/visa-regulations.jpg',
    date: '2023-05-15',
    category: 'news',
    icon: 'Globe',
  },
  {
    id: '2',
    title: 'Top 5 Tips for a Successful Visa Interview',
    excerpt:
      'Prepare for your visa interview with these expert tips. Increase your chances of approval with our comprehensive guide.',
    image:
      'https://kcxqbkwxvnlhzxvwlnpv.supabase.co/storage/v1/object/public/images/visa-interview.jpg',
    date: '2023-05-10',
    category: 'blog',
    icon: 'FileText',
  },
  {
    id: '3',
    title: 'Immigration Policy Updates',
    excerpt:
      'Recent changes in immigration policies and how they might affect you. Stay informed about the latest developments in immigration law.',
    image:
      'https://kcxqbkwxvnlhzxvwlnpv.supabase.co/storage/v1/object/public/images/policy-updates.jpg',
    date: '2023-05-05',
    category: 'update',
    icon: 'TrendingUp',
  },
  {
    id: '4',
    title: 'Understanding the Points-Based Immigration System',
    excerpt:
      'A comprehensive guide to navigating the points-based immigration system. Learn how to maximize your chances for a successful application.',
    image:
      'https://kcxqbkwxvnlhzxvwlnpv.supabase.co/storage/v1/object/public/images/points-based-system.jpg',
    date: '2023-05-01',
    category: 'blog',
    icon: 'FileText',
  },
  {
    id: '5',
    title: 'COVID-19 and Its Impact on Immigration',
    excerpt:
      'How the ongoing pandemic continues to affect immigration processes worldwide. Stay updated on travel restrictions and policy changes.',
    image:
      'https://kcxqbkwxvnlhzxvwlnpv.supabase.co/storage/v1/object/public/images/covid-impact.jpg',
    date: '2023-04-28',
    category: 'news',
    icon: 'Globe',
  },
]

const iconComponents = {
  Globe,
  FileText,
  TrendingUp,
}

export default function MagazineStyleNews() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
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
              <Card className="md:col-span-2 overflow-hidden">
                <div className="md:flex">
                  <Image
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    width={600}
                    height={400}
                    className="object-cover w-full md:w-1/2 h-64 md:h-auto"
                  />
                  <div className="p-6 md:w-1/2">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">{newsItems[0].title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{newsItems[0].excerpt}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2">{newsItems[0].date}</span>
                        <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs">
                          {newsItems[0].category}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/${newsItems[0].category}/${newsItems[0].id}`} passHref>
                        <Button variant="outline">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </div>
                </div>
              </Card>
              {newsItems.slice(1).map((item) => {
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
                      <Link href={`/${item.category}/${item.id}`} passHref className="w-full">
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
