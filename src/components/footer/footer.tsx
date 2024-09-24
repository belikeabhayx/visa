'use client'

import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
      import { MapPin, Phone, Mail } from 'lucide-react'

export const Footer = () => {
  return (
    <div className="relative w-full bg-[#171738] text-white py-12">
      <div className="container mx-auto">
        <div className="flex gap-8">
          <div className="space-y-6 mr-44">
            <div className="aspect-video w-full max-w-md overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28037.976886994144!2d77.250349!3d28.54732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38ccb710bd1%3A0xf1fdb30c8ceacc17!2sProvince%20Immigration%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1726666149236!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <p className="text-sm">
                  1201-1208, 12th Floor, Devika Tower, Nehru Place, New Delhi-110019
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <p className="text-sm">+91 98961 96762</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <p className="text-sm">info@provinceimmigration.com</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Canada immigration */}
            <div>
              <h3 className="text-xl font-bold mb-7 uppercase">Canada immigration</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Canada PR Visa From India
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Canada Express Entry Program 2024 | Immigrate To Canada
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Canada Occupation in Demand List 2024
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Canada Student Visa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Canada Super visa 2024: Benefits, Requirements And Application
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Canada Business Visa 2024: Easy Guide & Requirements From India
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Family Sponsorship Canada Visa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Canada Federal Skilled worker Program 2024 | Apply Canada PR
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Canadian experience class (CEC) 2024 | Immigration To Canada
                  </a>
                </li>
              </ul>
            </div>

            {/* Australia Immigration */}
            <div>
              <h3 className="text-xl font-bold mb-7 uppercase">Australia Immigration</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Australia PR Visa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Australia PR Visa fees
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Australia PR Visa processing Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Australia Occupation List
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Skilled Recognised Graduate Subclass 476 visa Austraila From India 2024
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Employer Nomination Scheme 186 Visa Australia Direct Entry Stream 2024
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Western Australia Occupation List 2024
                  </a>
                </li>
              </ul>
            </div>

            {/* Country List */}
            <div>
              <h3 className="text-xl font-bold mb-7 uppercase">Country List</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Canada
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Australia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Germany
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Hong Kong
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    United States
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    New Zealand
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    United Kingdom
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Europe
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-neutral-700">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                aria-label={`Social media link ${index + 1}`}
              >
                <Icon className="text-white" />
              </a>
            ))}
          </div>

          <div className="flex items-center text-sm">
            <span>Copyright © {new Date().getFullYear()}</span>
            <span className="mx-2 w-px h-3 bg-neutral-700"></span>
            <span>Designed by Appletneo</span>
          </div>
        </div>
      </div>
    </div>
  )
}
