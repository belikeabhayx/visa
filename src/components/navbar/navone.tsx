import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const NavOne = () => {
  return (
    <div className="bg-white text-black h-16 flex items-center justify-between px-4 py-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-left pl-8">
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
          </div>
          <div className="text-right pr-8">Monday - Friday / 8AM to 5PM</div>
        </div>
      </div>
    </div>
  )
}

export default NavOne
