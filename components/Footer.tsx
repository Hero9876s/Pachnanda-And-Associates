import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f172a] dark:bg-slate-950 text-white transition-colors duration-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pachnanda & Associates</h3>
            <p className="text-gray-300 mb-4">
              Trusted Chartered Accountants delivering tax, compliance & financial clarity for over 25+ years.
            </p>
            <p className="text-sm text-gray-400">
              Member of ICAI | FCA, DISA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/why-trust-us" className="text-gray-300 hover:text-white transition-colors">
                  Why Trust Us
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-gray-300 hover:text-white transition-colors">
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#taxation" className="text-gray-300 hover:text-white transition-colors">
                  Taxation Services
                </Link>
              </li>
              <li>
                <Link href="/services#business" className="text-gray-300 hover:text-white transition-colors">
                  Business & Startup
                </Link>
              </li>
              <li>
                <Link href="/services#legal" className="text-gray-300 hover:text-white transition-colors">
                  Legal & Compliance
                </Link>
              </li>
              <li>
                <Link href="/services#financial" className="text-gray-300 hover:text-white transition-colors">
                  Financial Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiPhone className="w-5 h-5 mt-1 text-gray-400" />
                <div className="text-gray-300">
                  <a href="tel:+919419195996" className="hover:text-white">+91 9419195996</a>
                  <br />
                  <a href="tel:+917006341525" className="hover:text-white">+91 7006341525</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FiMail className="w-5 h-5 mt-1 text-gray-400" />
                <a href="mailto:pachnandas28@gmail.com" className="text-gray-300 hover:text-white">
                  pachnandas28@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 mt-1 text-gray-400" />
                <div className="text-gray-300 text-sm">
                  Plot No. 7/8, Adjoining SBI,<br />
                  Sector 6A, Trikuta Nagar,<br />
                  Jammu, J&K – 180020
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-slate-800 transition-colors mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pachnanda and Associates. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {/* <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link> */}
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

