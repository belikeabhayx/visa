// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Card, CardHeader, CardTitle } from '@/components/ui/card'
// import { GraduationCap, Plane, Briefcase, Palmtree } from 'lucide-react'

// const categories = [
//   { name: 'Education', icon: GraduationCap, countries: ['USA', 'UK', 'Canada', 'Australia'] },
//   { name: 'Immigration', icon: Plane, countries: ['Canada', 'New Zealand', 'Germany', 'Sweden'] },
//   {
//     name: 'Business',
//     icon: Briefcase,
//     countries: ['Singapore', 'UAE', 'Netherlands', 'Switzerland'],
//   },
//   { name: 'Tourist', icon: Palmtree, countries: ['France', 'Japan', 'Italy', 'Thailand'] },
// ]

// export default function Component() {
//   const [selectedCategory, setSelectedCategory] = useState(null)

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-4xl font-bold text-center mb-12">Your Gateway to Global Opportunities</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//         {categories.map((category) => (
//           <Card
//             key={category.name}
//             className={`cursor-pointer transition-all duration-300 ${
//               selectedCategory === category.name ? 'ring-2 ring-primary' : ''
//             }`}
//             onClick={() => setSelectedCategory(category.name)}
//           >
//             <CardHeader className="flex flex-col items-center">
//               <category.icon className="w-12 h-12 mb-4 text-primary" />
//               <CardTitle>{category.name}</CardTitle>
//             </CardHeader>
//           </Card>
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: selectedCategory ? 1 : 0, height: selectedCategory ? 'auto' : 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         {selectedCategory && (
//           <div className="mt-8">
//             <h2 className="text-2xl font-semibold mb-6 text-center">
//               Best Countries for {selectedCategory}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {categories
//                 .find((c) => c.name === selectedCategory)
//                 .countries.map((country) => (
//                   <Card key={country} className="bg-secondary">
//                     <CardHeader>
//                       <CardTitle className="text-center">{country}</CardTitle>
//                     </CardHeader>
//                   </Card>
//                 ))}
//             </div>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   )
// }
