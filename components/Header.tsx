'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { ThemeToggle } from './ThemeToggle'

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
          ${isActive ? 'text-corporate-blue dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400'}
          after:absolute after:left-0 after:-bottom-1 after:h-[2px]
          after:bg-corporate-blue dark:after:bg-blue-400 after:transition-all after:duration-300
          ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
        `}
      >
        {label}
      </Link>
    )
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-shadow ${
        scrolled ? 'shadow-md dark:shadow-slate-800/50 border-b border-transparent dark:border-slate-800' : 'shadow-none'
      }`}
    >
      <nav className="w-full px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-corporate-blue dark:text-white">
            PACHNANDA & ASSOCIATES
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">

            {navLink('/', 'Home')}

            {/* ✅ PERFECT ABOUT DROPDOWN (CSS ONLY) */}
            <div className="relative group">
              <button
                type="button"
                className="relative flex items-center gap-1 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:bg-corporate-blue dark:after:bg-blue-400 after:w-0 group-hover:after:w-full after:transition-all"
              >
                About <FiChevronDown />
              </button>

              {/* DROPDOWN */}
              <div
                className="absolute left-0 mt-3 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-200 dark:border-slate-700
                opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden"
              >
                <Link href="/about" className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                  About Us
                </Link>
                <Link href="/founders-story" className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                  Founder’s Story
                </Link>
                <Link href="/our-story" className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                  Our Story
                </Link>
                <Link href="/why-trust-us" className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                  Why Trust Us
                </Link>
              </div>
            </div>

            {navLink('/services', 'Services')}
            {navLink('/consultation', 'Consultation')}
          </div>

          {/* CTA & THEME TOGGLE */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden lg:inline-block bg-[#1f4e79] hover:bg-[#163a5f] dark:bg-blue-600 dark:hover:bg-blue-700
              text-white px-6 py-3 rounded-lg font-bold shadow-md transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-gray-800 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
                className="block px-4 py-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-corporate-blue dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
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
