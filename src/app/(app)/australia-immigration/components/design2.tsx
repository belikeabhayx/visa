"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ChevronRight, Globe, Clock, FileText, Users, CheckCircle, MapPin } from 'lucide-react'

const Design2 = () => {
  const [selectedTab, setSelectedTab] = useState('why-australia')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Australia Immigration Visa For Indians 2024</h1>
          <p className="text-xl">Your Gateway to a New Life Down Under</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Explore Australian Immigration</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="why-australia">Why Australia?</TabsTrigger>
                    <TabsTrigger value="visa-types">Visa Types</TabsTrigger>
                    <TabsTrigger value="pr-process">PR Process</TabsTrigger>
                  </TabsList>
                  <TabsContent value="why-australia" className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Why Should You Consider Migrating To Australia?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          Strong economy with excellent job opportunities across various sectors
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          High quality of life with world-class healthcare and education systems
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          Multicultural society with a welcoming attitude towards immigrants
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          Beautiful landscapes, diverse natural wonders, and vibrant cities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Excellent work-life balance and outdoor lifestyle opportunities</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="visa-types" className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Popular Visa Types for Australian Immigration
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <h4 className="font-semibold">Skilled Independent Visa (Subclass 189)</h4>
                        <p className="text-sm text-gray-600">
                          For skilled workers who are not sponsored by an employer, state or
                          territory, or family member.
                        </p>
                      </li>
                      <li>
                        <h4 className="font-semibold">Skilled Nominated Visa (Subclass 190)</h4>
                        <p className="text-sm text-gray-600">
                          For skilled workers nominated by a state or territory government.
                        </p>
                      </li>
                      <li>
                        <h4 className="font-semibold">Skilled Work Regional Visa (Subclass 491)</h4>
                        <p className="text-sm text-gray-600">
                          For skilled workers who want to live and work in regional Australia.
                        </p>
                      </li>
                      <li>
                        <h4 className="font-semibold">Employer Nomination Scheme (Subclass 186)</h4>
                        <p className="text-sm text-gray-600">
                          For skilled workers with an employer willing to sponsor them for a
                          permanent position.
                        </p>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="pr-process" className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Australia PR Process From India</h3>
                    <ol className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full">
                          1
                        </span>
                        <div>
                          <h4 className="font-semibold">Check Your Eligibility</h4>
                          <p className="text-sm text-gray-600">
                            Assess your qualifications, work experience, and English proficiency.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full">
                          2
                        </span>
                        <div>
                          <h4 className="font-semibold">Skills Assessment</h4>
                          <p className="text-sm text-gray-600">
                            Get your skills assessed by the relevant assessing authority.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full">
                          3
                        </span>
                        <div>
                          <h4 className="font-semibold">Submit Expression of Interest (EOI)</h4>
                          <p className="text-sm text-gray-600">
                            Create an account in SkillSelect and submit your EOI.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full">
                          4
                        </span>
                        <div>
                          <h4 className="font-semibold">Receive Invitation and Apply</h4>
                          <p className="text-sm text-gray-600">
                            If selected, you'll receive an invitation to apply for the visa.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Top In-demand Occupations in Australia 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Software Engineer',
                    'Registered Nurse',
                    'Data Scientist',
                    'Civil Engineer',
                    'Teacher',
                    'Accountant',
                    'Marketing Specialist',
                    'Mechanical Engineer',
                  ].map((occupation, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="font-medium">{occupation}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Check Your Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input id="full-name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Select>
                      <SelectTrigger id="occupation">
                        <SelectValue placeholder="Select your occupation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software-engineer">Software Engineer</SelectItem>
                        <SelectItem value="nurse">Registered Nurse</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="accountant">Accountant</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Check Eligibility</Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                      <Globe className="mr-2 h-4 w-4" />
                      Visa Requirements
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                      <Clock className="mr-2 h-4 w-4" />
                      Processing Times
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                      <FileText className="mr-2 h-4 w-4" />
                      Document Checklist
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                      <Users className="mr-2 h-4 w-4" />
                      Family Migration
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                      <MapPin className="mr-2 h-4 w-4" />
                      Regional Migration
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          © 2024 Australia Immigration Services. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Design2;
