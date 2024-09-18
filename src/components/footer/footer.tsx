'use client'

import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { MapPin, Clock, Phone } from 'lucide-react'

export const Footer = () => {
  return (
    <div className="relative w-full bg-[#171738] text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
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
                  Jl Danau Bratan H2/E61A, Kedungkandang, Malang City, East Java 65139
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <p className="text-sm">Monday - Friday / 8AM to 5PM</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <p className="text-sm">+1 (333) 000-0000</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Our Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 uppercase">Country List</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
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

            <div>
              <h3 className="text-lg font-semibold mb-3">Help</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
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
