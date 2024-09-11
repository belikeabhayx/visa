'use client'

import React, { JSX } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export const Footer = (): JSX.Element => {
  return (
    <div className="relative w-full h-[460px] bg-[#171738]">
      <div className="container mx-auto pt-10 ">
        {/* First Row */}

        <div className="grid grid-cols-2">
          <div>
            {/* Contact Info */}
            <div className="">
              <div className="h-52 w-48 overflow-hidden rounded-md shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434812809!2d78.63357331532002!3d27.16748997962407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d0b8a2f7f7dbd%3A0x504f2c6b8eef0f8!2sGoogle+Maps!5e0!3m2!1sen!2sin!4v1614493779739!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="space-y-3">
                <p className="text-white">
                  Jl Danau Bratan H2/E61A, Kedungkandang, Malang City, East Java 65139
                </p>
                <div className="flex items-center space-x-2">
                  <img className="w-5 h-5" alt="Briefcase" src="briefcase.svg" />
                  <p className="text-white">Monday - Friday / 8AM to 5PM</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img className="w-5 h-5" alt="Phone" src="phone.svg" />
                  <p className="text-white">+1 (333) 000-0000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5">
            {/* Navigation Section */}
            <div>
              <h3 className="text-white text-xl mb-3">Navigation</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>Home</li>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Our Team</li>
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-white text-xl mb-3">Services</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>Student Visa</li>
                <li>Visa Consultation</li>
                <li>Document Preparation</li>
                <li>Visa Application</li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="text-white text-xl mb-3">Help</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>Customer Support</li>
                <li>How It Works</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-20">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full">
              <FaFacebookF className="text-white" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full">
              <FaTwitter className="text-white" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full">
              <FaInstagram className="text-white" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full">
              <FaLinkedinIn className="text-white" />
            </div>
          </div>

          {/* Copyright Section */}
          <div className="flex items-center mr-24">
            <div className="text-white">Copyright © 2024</div>
            <img className="mx-2 w-px h-3" alt="Line" src="line-3.svg" />
            <div className="text-white">Designed by Appletneo</div>
          </div>
        </div>
      </div>
    </div>
  )
}
