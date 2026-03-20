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

  return (
    <div className={`${className}`}>
      <div className={`${sizeClasses[size]} relative mx-auto`}>
        {!imageError ? (
          <>
            <Image
              src="/images/ca-sandeep-pachnanda-founder.png"
              alt="CA Sandeep Pachnanda, FCA, DISA – Founder of Pachnanda and Associates"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover rounded-lg shadow-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              priority={size === 'large'}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              quality={85}
            />
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-lg flex items-center justify-center animate-pulse">
                <div className="text-center p-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-200 dark:border-slate-700 border-t-corporate-blue dark:border-t-blue-500 mx-auto"></div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-corporate-blue mb-2">CA</div>
              <div className="text-sm text-gray-600 mb-2">CA Sandeep Pachnanda</div>
            </div>
          </div>
        )}
      </div>
  {showCaption && (
    <div className="mt-4 text-center">
      <p className="font-extrabold text-lg mb-1 drop-shadow-sm">
        CA Sandeep Pachnanda, FCA, DISA
      </p>
      <p className="font-bold text-base opacity-90 drop-shadow-sm">
        Founder – Pachnanda and Associates
      </p>
    </div>
  )}


    </div>
  )
}

