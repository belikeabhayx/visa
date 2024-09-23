import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronRight, Globe, Clock, FileText, Users, CheckCircle } from 'lucide-react'

const Design1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Australia Immigration Visa For Indians 2024</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Australia Immigrate</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="why-australia">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="why-australia">Why Australia?</TabsTrigger>
                    <TabsTrigger value="visa-types">Visa Types</TabsTrigger>
                    <TabsTrigger value="pr-process">PR Process</TabsTrigger>
                  </TabsList>
                  <TabsContent value="why-australia">
                    <h3 className="text-lg font-semibold mb-2">
                      Why Should You Consider Migrating To Australia?
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Strong economy with excellent job opportunities</li>
                      <li>High quality of life and healthcare system</li>
                      <li>Multicultural society with a welcoming attitude towards immigrants</li>
                      <li>World-class education system</li>
                      <li>Beautiful landscapes and diverse natural wonders</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="visa-types">
                    <h3 className="text-lg font-semibold mb-2">
                      Different Visa Types in Australian Immigration
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Skilled Independent Visa (Subclass 189)</li>
                      <li>Skilled Nominated Visa (Subclass 190)</li>
                      <li>Skilled Work Regional Visa (Subclass 491)</li>
                      <li>Employer Nomination Scheme (Subclass 186)</li>
                      <li>Business Innovation and Investment Visa (Subclass 188)</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="pr-process">
                    <h3 className="text-lg font-semibold mb-2">Australia PR Process From India</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Check Your Eligibility</li>
                      <li>Skills Assessment</li>
                      <li>Language Proficiency Test</li>
                      <li>Submit Expression of Interest (EOI)</li>
                      <li>Receive Invitation to Apply</li>
                      <li>Lodge Visa Application</li>
                      <li>Health and Character Checks</li>
                      <li>Visa Decision</li>
                    </ol>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Top In-demand Occupations in Australia in 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Software Engineer
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Registered Nurse
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Data Scientist
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Civil Engineer
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Teacher
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Accountant
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Check Your Eligibility</CardTitle>
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
                  <Button className="w-full">Submit</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Button variant="link" className="p-0 h-auto">
                      <Globe className="mr-2 h-4 w-4" />
                      Visa Requirements
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto">
                      <Clock className="mr-2 h-4 w-4" />
                      Processing Times
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto">
                      <FileText className="mr-2 h-4 w-4" />
                      Document Checklist
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto">
                      <Users className="mr-2 h-4 w-4" />
                      Family Migration
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

export default Design1;
