import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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

export default function GridFeaturedNews() {
  const featuredPost = newsItems[0]
  const otherPosts = newsItems.slice(1)

  return (
    <section className="w-full py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tighter mb-8 text-center text-primary">
          Latest News & Insights
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full lg:col-span-2 overflow-hidden">
            <div className="md:flex h-full">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                width={800}
                height={400}
                className="object-cover w-full md:w-2/3 h-64 md:h-auto"
              />
              <div className="p-6 md:w-1/3 flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                    <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs">
                      {featuredPost.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-bold">{featuredPost.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/${featuredPost.category}/${featuredPost.id}`}
                    passHref
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">
                      Read Featured Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </div>
          </Card>
          {otherPosts.map((item) => {
            const IconComponent = iconComponents[item.icon]
            return (
              <Card key={item.id} className="overflow-hidden flex flex-col">
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
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="mt-auto">
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
