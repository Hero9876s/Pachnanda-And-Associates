'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* Sticky shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href
    return (
      <Link
        href={href}
        className={`relative text-lg font-semibold transition-colors
          ${isActive ? 'text-corporate-blue' : 'text-gray-700 hover:text-corporate-blue'}
          after:absolute after:left-0 after:-bottom-1 after:h-[2px]
          after:bg-corporate-blue after:transition-all after:duration-300
          ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
        `}
      >
        {label}
      </Link>
    )
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <nav className="w-full px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-corporate-blue">
            PACHNANDA & ASSOCIATES
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">

            {navLink('/', 'Home')}

            {/* ✅ PERFECT ABOUT DROPDOWN (CSS ONLY) */}
            <div className="relative group">
              <button
                type="button"
                className="relative flex items-center gap-1 text-lg font-semibold text-gray-700 hover:text-corporate-blue
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:bg-corporate-blue after:w-0 group-hover:after:w-full after:transition-all"
              >
                About <FiChevronDown />
              </button>

              {/* DROPDOWN */}
              <div
                className="absolute left-0 mt-3 w-56 bg-white rounded-lg shadow-lg border border-gray-200
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200 z-50"
              >
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                  About Us
                </Link>
                <Link href="/founders-story" className="block px-4 py-2 hover:bg-gray-100">
                  Founder’s Story
                </Link>
                <Link href="/our-story" className="block px-4 py-2 hover:bg-gray-100">
                  Our Story
                </Link>
                <Link href="/why-trust-us" className="block px-4 py-2 hover:bg-gray-100">
                  Why Trust Us
                </Link>
              </div>
            </div>

            {navLink('/services', 'Services')}
            {navLink('/consultation', 'Consultation')}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-block bg-[#1f4e79] hover:bg-[#163a5f]
            text-white px-6 py-3 rounded-lg font-bold shadow-md"
          >
            Get in Touch
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4 space-y-2">
            {[
              ['/', 'Home'],
              ['/about', 'About Us'],
              ['/founders-story', "Founder’s Story"],
              ['/our-story', 'Our Story'],
              ['/why-trust-us', 'Why Trust Us'],
              ['/services', 'Services'],
              ['/consultation', 'Consultation'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="block px-4 py-2 text-lg font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
