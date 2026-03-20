'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface FounderImageProps {
  size?: 'small' | 'medium' | 'large'
  showCaption?: boolean
  className?: string
}

export default function FounderImage({ 
  size = 'medium', 
  showCaption = true,
  className = '' 
}: FounderImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const sizeClasses = {
    small: 'w-48 h-64',
    medium: 'w-64 h-80',
    large: 'w-80 h-96',
  }

  useEffect(() => {
    // Check if image exists
    const img = new window.Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageError(true)
    img.src = '/images/ca-sandeep-pachnanda-founder.png'
  }, [])

  return (
    <div className={`${className}`}>
      <div className={`${sizeClasses[size]} relative mx-auto`}>
        {!imageError ? (
          <>
            <Image
              src="/images/ca-sandeep-pachnanda-founder.png"
              alt="CA Sandeep Pachnanda, FCA, DISA – Founder of Pachnanda and Associates"
              fill
              className={`object-cover rounded-lg shadow-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              priority={size === 'large'}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              unoptimized
            />
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-corporate-blue mx-auto mb-2"></div>
                  <div className="text-sm text-gray-600">Loading image...</div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-corporate-blue mb-2">CA</div>
              <div className="text-sm text-gray-600 mb-2">CA Sandeep Pachnanda</div>
              <div className="text-xs text-gray-500">Please add image at: /public/images/ca-sandeep-pachnanda-founder.jpg</div>
            </div>
          </div>
        )}
      </div>
  {showCaption && (
  <div className="mt-4 text-center">
    <p className="text-gray-900 font-extrabold text-lg mb-1">
      CA Sandeep Pachnanda, FCA, DISA
    </p>
    <p className="text-gray-950 font-bold text-base">
      Founder – Pachnanda and Associates
    </p>
  </div>
)}


    </div>
  )
}

