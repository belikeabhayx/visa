import { useState } from 'react'
import { PlayCircle, Pause, ChevronLeft, ChevronRight, Star, Globe, MapPin } from 'lucide-react'

export default function TestimonialsPage2() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const videoTestimonials = [
    {
      id: 1,
      src: '/placeholder.svg?height=720&width=1280',
      name: 'John Doe',
      country: 'USA',
      flag: '🇺🇸',
      testimonial: 'The visa process was seamless and efficient!',
      rating: 5,
    },
    {
      id: 2,
      src: '/placeholder.svg?height=720&width=1280',
      name: 'Jane Smith',
      country: 'Canada',
      flag: '🇨🇦',
      testimonial: 'Exceptional service and support throughout my application.',
      rating: 5,
    },
    {
      id: 3,
      src: '/placeholder.svg?height=720&width=1280',
      name: 'Ahmed Hassan',
      country: 'UAE',
      flag: '🇦🇪',
      testimonial: 'They made my dream of working abroad a reality.',
      rating: 4,
    },
  ]

  const textTestimonials = [
    {
      id: 1,
      quote:
        "The expertise and guidance provided were invaluable. I couldn't have navigated the complex immigration process without their help.",
      name: 'Maria Garcia',
      country: 'Spain',
      flag: '🇪🇸',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'Their attention to detail and deep understanding of immigration law made all the difference in my successful application.',
      name: 'Raj Patel',
      country: 'India',
      flag: '🇮🇳',
      rating: 5,
    },
    {
      id: 3,
      quote:
        'From start to finish, the team was professional, responsive, and truly cared about my case. Highly recommended!',
      name: 'Liu Wei',
      country: 'China',
      flag: '🇨🇳',
      rating: 4,
    },
    {
      id: 4,
      quote:
        'The personalized approach and constant communication made me feel supported throughout the entire visa process.',
      name: 'Sophie Dubois',
      country: 'France',
      flag: '🇫🇷',
      rating: 5,
    },
  ]

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoTestimonials.length)
    setIsPlaying(false)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length)
    setIsPlaying(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">Client Success Stories</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Discover how we've helped individuals from around the world achieve their visa and
            immigration goals
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured Testimonials</h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={videoTestimonials[currentVideo].src}
                    alt={`Video testimonial by ${videoTestimonials[currentVideo].name}`}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? (
                      <Pause className="w-20 h-20 text-white opacity-75 hover:opacity-100 transition-opacity" />
                    ) : (
                      <PlayCircle className="w-20 h-20 text-white opacity-75 hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {videoTestimonials[currentVideo].name}{' '}
                      <span className="text-xl">{videoTestimonials[currentVideo].flag}</span>
                    </h3>
                    <p className="text-lg mb-4 flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      {videoTestimonials[currentVideo].country}
                    </p>
                    <p className="text-lg italic mb-4">
                      "{videoTestimonials[currentVideo].testimonial}"
                    </p>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < videoTestimonials[currentVideo].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={prevVideo}
                      className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="text-center text-gray-600">
                      {currentVideo + 1} / {videoTestimonials.length}
                    </div>
                    <button
                      onClick={nextVideo}
                      className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-center mb-12">More Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {textTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Globe className="w-4 h-4 mr-1" />
                      {testimonial.country} {testimonial.flag}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
