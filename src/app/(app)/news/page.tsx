"use client"
import { useState, useEffect } from "react"

const NewsPage = () => {
  const [news, setNews] = useState<any[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch('/api/news')
      const data = await res.json()

      // Transform the data to match your expected format
      const transformedNews = data.docs.map((article:any) => ({
        id: article.id,
        title: article.title,
        content: article.content.root.children[0].children[0].text,
        publishDate: article.publishDate,
        featuredImage: article.featuredImage?.url || null,
       
      }))

      setNews(transformedNews)
    }

    fetchNews()
  }, [])

  return (
    <div className="container">
      <h1>Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((article: any) => (
          <div key={article.id} className="news-item">
            <img src={article.featuredImage} alt={`Article ${article.id}`} />
            <h2>{article.title}</h2>
            <p>{new Date(article.publishDate).toLocaleDateString()}</p>
            <p>
              {typeof article.content === 'string'
                ? article.content.slice(0, 150)
                : 'Content not available'}
            </p>
            <a href={`/news/${article.id}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsPage;
