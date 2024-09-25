"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  ChevronRight,
  Globe,
  Clock,
  FileText,
  Users,
  CheckCircle,
  MapPin,
  Book,
  Briefcase,
  GraduationCap,
  Heart,
} from 'lucide-react'

const Design3 = () => {
  const [selectedTab, setSelectedTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Australia Immigration Visa For Indians 2024</h1>
          <p className="text-xl">Your Comprehensive Guide to a New Life Down Under</p>
        </div>
      </header>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4 overflow-x-auto py-4">
            <li>
              <Button variant="ghost" onClick={() => setSelectedTab('overview')}>
                Overview
              </Button>
            </li>
            <li>
              <Button variant="ghost" onClick={() => setSelectedTab('visa-types')}>
                Visa Types
              </Button>
            </li>
            <li>
              <Button variant="ghost" onClick={() => setSelectedTab('eligibility')}>
                Eligibility
              </Button>
            </li>
            <li>
              <Button variant="ghost" onClick={() => setSelectedTab('process')}>
                Application Process
              </Button>
            </li>
            <li>
              <Button variant="ghost" onClick={() => setSelectedTab('life-in-australia')}>
                Life in Australia
              </Button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Welcome to Australia: A Land of Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Australia, known for its stunning landscapes, vibrant cities, and high quality
                      of life, offers excellent opportunities for skilled immigrants. As an Indian
                      professional considering migration, you'll find Australia to be a welcoming
                      destination with a strong economy and multicultural society.
                    </p>
                    <h3 className="text-xl font-semibold">Why Choose Australia?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Robust Economy:</strong> Australia boasts a stable and growing
                          economy, offering numerous job opportunities across various sectors.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>High Quality of Life:</strong> Consistently ranked among the
                          world's most livable countries, Australia offers excellent healthcare,
                          education, and social services.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Multicultural Society:</strong> With a rich tapestry of cultures,
                          Australia welcomes diversity and offers a comfortable environment for
                          immigrants.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>World-class Education:</strong> Home to several top-ranking
                          universities, Australia provides excellent educational opportunities for
                          you and your family.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Natural Beauty:</strong> From pristine beaches to lush rainforests
                          and unique wildlife, Australia offers unparalleled natural experiences.
                        </span>
                      </li>
                    </ul>
                    <p>
                      As you embark on your journey to migrate to Australia, this guide will provide
                      you with comprehensive information on visa types, eligibility criteria, the
                      application process, and what to expect when living in Australia.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="visa-types">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Australian Visa Types for Skilled Indians
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p>
                      Australia offers various visa options for skilled workers, each catering to
                      different circumstances and career goals. Here are the main visa types you
                      should consider:
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="skilled-independent">
                        <AccordionTrigger>Skilled Independent Visa (Subclass 189)</AccordionTrigger>
                        <AccordionContent>
                          <p>
                            This points-based visa is for skilled workers who are not sponsored by
                            an employer, state or territory, or family member. Key features include:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Permanent residency from the day your visa is granted</li>
                            <li>Freedom to live and work anywhere in Australia</li>
                            <li>
                              Eligibility to sponsor eligible relatives for permanent residence
                            </li>
                            <li>
                              Travel to and from Australia for five years from the date the visa is
                              granted
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="skilled-nominated">
                        <AccordionTrigger>Skilled Nominated Visa (Subclass 190)</AccordionTrigger>
                        <AccordionContent>
                          <p>
                            This visa is for skilled workers nominated by an Australian state or
                            territory. Benefits include:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Permanent residency for you and your family</li>
                            <li>Work and study rights in Australia</li>
                            <li>Access to Medicare, Australia's public healthcare system</li>
                            <li>Pathway to Australian citizenship</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="skilled-work-regional">
                        <AccordionTrigger>
                          Skilled Work Regional (Provisional) Visa (Subclass 491)
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            This visa is for skilled workers who want to live and work in regional
                            Australia. It offers:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Five-year provisional visa</li>
                            <li>Pathway to permanent residency after three years</li>
                            <li>
                              Live, work, and study in a designated regional area of Australia
                            </li>
                            <li>Include family members in your application</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="employer-nomination">
                        <AccordionTrigger>
                          Employer Nomination Scheme (Subclass 186)
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            This visa is for skilled workers with an employer willing to sponsor
                            them for a permanent position. It includes:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Permanent residency from the start</li>
                            <li>Sponsorship by an approved Australian employer</li>
                            <li>No age limit for the Temporary Residence Transition stream</li>
                            <li>Ability to include family members in your application</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <p>
                      Each visa type has its own set of requirements and benefits. It's essential to
                      carefully consider your qualifications, career goals, and personal
                      circumstances when choosing the right visa pathway for you.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="eligibility">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Eligibility Criteria for Australian Immigration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p>
                      To be eligible for skilled migration to Australia, you need to meet several
                      criteria. While specific requirements may vary depending on the visa subclass,
                      here are the general eligibility factors:
                    </p>

                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">1. Skills Assessment</h3>
                        <p>
                          You must have your skills assessed by the relevant assessing authority for
                          your nominated occupation. This ensures that your qualifications and
                          experience meet Australian standards.
                        </p>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">2. Age Requirement</h3>
                        <p>
                          Most skilled visas require you to be under 45 years of age at the time of
                          application. Some visas may have different age limits.
                        </p>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">
                          3. English Language Proficiency
                        </h3>
                        <p>
                          You must demonstrate competent English language skills. This is typically
                          done through tests like IELTS, TOEFL iBT, or PTE Academic.
                        </p>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">4. Nominated Occupation</h3>
                        <p>
                          Your occupation must be on the relevant skilled occupation list for the
                          visa you're applying for.
                        </p>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">5. Work Experience</h3>
                        <p>
                          You generally need a minimum of three years of skilled work experience in
                          your nominated occupation or a closely related field.
                        </p>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">
                          6. Health and Character Requirements
                        </h3>
                        <p>
                          You must meet health and character requirements, including medical
                          examinations and police clearances.
                        </p>
                      </div>
                    </div>

                    <p className="font-semibold">Points Test</p>
                    <p>
                      For points-tested visas (like subclasses 189, 190, and 491), you need to score
                      a minimum number of points based on factors such as:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Age</li>
                      <li>English language ability</li>
                      <li>Skilled employment experience</li>
                      <li>Educational qualifications</li>
                      <li>Australian study requirement</li>
                      <li>Other factors (e.g., partner skills, regional study)</li>
                    </ul>

                    <p>
                      It's important to note that meeting the minimum eligibility criteria does not
                      guarantee a visa grant. The Department of Home Affairs assesses each
                      application on its individual merits.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="process">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Australian Visa Application Process</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p>
                      The process of applying for an Australian skilled visa involves several steps.
                      While the exact process may vary depending on the visa subclass, here's a
                      general overview:
                    </p>

                    <ol className="space-y-6">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full flex-shrink-0">
                          1
                        </span>
                        <div>
                          <h4 className="font-semibold text-lg">Skills Assessment</h4>
                          <p className="mt-2">
                            Have your skills assessed by the relevant assessing authority for your
                            occupation. This step is crucial as it validates your qualifications and
                            experience against Australian standards.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full flex-shrink-0">
                          2
                        </span>
                        <div>
                          <h4 className="font-semibold text-lg">English Language Test</h4>
                          <p className="mt-2">
                            Take an approved English language test (such as IELTS, TOEFL iBT, or PTE
                            Academic) to demonstrate your English proficiency.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full flex-shrink-0">
                          3
                        </span>
                        <div>
                          <h4 className="font-semibold text-lg">Expression of Interest (EOI)</h4>
                          <p className="mt-2">
                            Submit an Expression of Interest through the SkillSelect system. This is
                            where you provide information about your skills, work experience, and
                            other relevant details.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full flex-shrink-0">
                          4
                        </span>
                        <div>
                          <h4 className="font-semibold text-lg">Receive an Invitation</h4>
                          <p className="mt-2">
                            If your EOI is successful, you'll receive an invitation to apply for the
                            visa. This invitation is typically valid for 60 days.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full flex-shrink-0">
                          5
                        </span>
                        <div>
                          <h4 className="font-semibold text-lg">Lodge Visa Application</h4>
                          <p className="mt-2">
                            Submit your visa application along with all required documents. This
                            includes proof of your skills assessment, English language ability, work
                            experience, and other supporting evidence.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full flex-shrink-0">
                          6
                        </span>
                        <div>
                          <h4 className="font-semibold text-lg">Health Examinations</h4>
                          <p className="mt-2">
                            Undergo the required health examinations. You may be able to do this
                            before or after lodging your visa application, depending on your
                            circumstances.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full flex-shrink-0">
                          7
                        </span>
                        <div>
                          <h4 className="font-semibold text-lg">Character Assessments</h4>
                          <p className="mt-2">
                            Provide police clearances and any other documents required for character
                            assessment.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-semibold mr-3 px-2.5 py-0.5 rounded-full flex-shrink-0">
                          8
                        </span>
                        <div>
                          <h4 className="font-semibold text-lg">Visa Decision</h4>
                          <p className="mt-2">
                            Wait for the Department of Home Affairs to assess your application and
                            make a decision. They may contact you for additional information if
                            needed.
                          </p>
                        </div>
                      </li>
                    </ol>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                      <p className="font-semibold">Important Notes:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          Processing times can vary significantly depending on the visa subclass and
                          individual circumstances.
                        </li>
                        <li>
                          Ensure all information provided is accurate and truthful. Providing false
                          or misleading information can lead to visa refusal or cancellation.
                        </li>
                        <li>
                          Consider seeking advice from a registered migration agent or immigration
                          lawyer, especially for complex cases.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="life-in-australia">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Life in Australia: What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p>
                      Moving to Australia is an exciting adventure that offers numerous
                      opportunities and a high quality of life. Here's what you can expect when you
                      make Australia your new home:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Briefcase className="mr-2 h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-lg">Work Culture</h3>
                            <p>
                              Australian workplaces are known for their relaxed yet professional
                              atmosphere. Expect a good work-life balance, fair working conditions,
                              and opportunities for career growth.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <GraduationCap className="mr-2 h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-lg">Education</h3>
                            <p>
                              Australia boasts a world-class education system, from primary schools
                              to universities. As a permanent resident, you'll have access to public
                              education and may be eligible for higher education loan programs.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Heart className="mr-2 h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-lg">Healthcare</h3>
                            <p>
                              The Medicare system provides access to a wide range of health
                              services. As a permanent resident, you'll be eligible for Medicare,
                              ensuring quality healthcare at little to no cost.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Users className="mr-2 h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-lg">Multicultural Society</h3>
                            <p>
                              Australia is home to people from diverse cultural backgrounds. You'll
                              find vibrant communities, cultural festivals, and a welcoming attitude
                              towards immigrants.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <MapPin className="mr-2 h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-lg">Lifestyle</h3>
                            <p>
                              Enjoy a high quality of life with beautiful beaches, national parks,
                              and modern cities. Australians value outdoor activities, sports, and a
                              balanced lifestyle.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Globe className="mr-2 h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-lg">Climate</h3>
                            <p>
                              Australia's climate varies across its vast landscape. Most cities
                              enjoy warm summers and mild winters, perfect for an outdoor lifestyle.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
                      <h3 className="font-semibold text-lg mb-2">Tips for Settling In</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Learn about Australian culture and customs to help you integrate more
                          easily.
                        </li>
                        <li>
                          Join local community groups or sports clubs to meet people and build a
                          social network.
                        </li>
                        <li>
                          Familiarize yourself with Australian laws and regulations, including road
                          rules if you plan to drive.
                        </li>
                        <li>
                          Open an Australian bank account and obtain a tax file number (TFN) for
                          employment purposes.
                        </li>
                        <li>
                          Explore your new city or town to discover local amenities, parks, and
                          attractions.
                        </li>
                      </ul>
                    </div>

                    <p>
                      Remember, while moving to a new country can be challenging, Australia's
                      friendly culture and support systems for new migrants can help make your
                      transition smoother. Embrace the opportunities, be open to new experiences,
                      and you'll soon feel at home in your new Australian life.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" placeholder="Enter years of experience" />
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
                  <li>
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                      <Book className="mr-2 h-4 w-4" />
                      Study in Australia
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Latest News</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-semibold">New Skilled Occupation List Released</h3>
                    <p className="text-sm text-gray-600">
                      The Australian government has updated the skilled occupation list for 2024...
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Read More
                    </Button>
                  </li>
                  <li>
                    <h3 className="font-semibold">Changes to Regional Visas</h3>
                    <p className="text-sm text-gray-600">
                      Recent updates to regional visas aim to attract more skilled workers to rural
                      areas...
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Read More
                    </Button>
                  </li>
                  <li>
                    <h3 className="font-semibold">COVID-19 Travel Updates</h3>
                    <p className="text-sm text-gray-600">
                      Latest information on travel restrictions and quarantine requirements...
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Read More
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-600">
                We are dedicated to helping skilled professionals navigate the Australian
                immigration process.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-600">Email: info@ausimmigration.com</p>
              <p className="text-sm text-gray-600">Phone: +61 2 1234 5678</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm">
                  LinkedIn
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-600 mb-2">
                Stay updated with the latest immigration news and changes.
              </p>
              <div className="flex">
                <Input placeholder="Your email" className="rounded-r-none" />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            © 2024 Australia Immigration Services. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  )
}

export default Design3;