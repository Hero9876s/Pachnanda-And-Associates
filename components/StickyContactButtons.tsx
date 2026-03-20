'use client'

import { FiPhone, FiMessageCircle } from 'react-icons/fi'

export default function StickyContactButtons() {
  const phoneNumber = '+919419195996'
  const whatsappNumber = '919419195996'
  const whatsappMessage = 'Hello, I would like to know more about your services.'

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        aria-label="Contact via WhatsApp"
      >
        <FiMessageCircle className="w-6 h-6" />
        <span className="ml-2 hidden group-hover:inline-block text-sm font-semibold">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-gradient-to-r from-corporate-blue to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        aria-label="Call us"
      >
        <FiPhone className="w-6 h-6" />
        <span className="ml-2 hidden group-hover:inline-block text-sm font-semibold">
          Call
        </span>
      </a>
    </div>
  )
}

