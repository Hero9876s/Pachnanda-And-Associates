import Link from 'next/link'
import FounderImage from '@/components/FounderImage'
import TrustMetrics from '@/components/TrustMetrics'
import CTASection from '@/components/CTASection'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
<section className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] dark:from-slate-900 dark:to-slate-950 text-white py-24 relative overflow-hidden">
  {/* Subtle abstract background element for premium feel */}
  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
  
  <div className="container-custom relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight leading-tight">
          Trusted Chartered Accountants Delivering <span className="text-blue-300">Financial Clarity</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed mb-8 max-w-xl">
          We help Indian business owners and individual taxpayers grow, remain compliant, and live stress-free financial lives through practical, ethical solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-white text-[#1E3A8A] dark:bg-blue-600 dark:text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
          >
            Get in Touch
          </Link>

          <Link
            href="/consultation"
            className="border-2 border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all duration-300 text-center backdrop-blur-sm"
          >
            Request Assistance
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div>
        <FounderImage size="large" />
      </div>

    </div>
  </div>
</section>

      {/* Trust Metrics */}
      <TrustMetrics />

      {/* Introduction Section */}
      <section className="section-padding bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full transform -translate-x-10 translate-y-10"></div>
              <FounderImage size="medium" />
            </div>
            <div className="relative z-10">
              <h2 className="heading-secondary">
                Meet CA Sandeep Pachnanda
              </h2>
              <p className="text-lead mb-6">
                With over 25+ years of professional experience, CA Sandeep Pachnanda leads Pachnanda and Associates with a commitment to transparent, ethical, and growth-oriented financial guidance.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                As a Fellow Chartered Accountant (FCA) and holder of the DISA (Diploma in Information Systems Audit) qualification, he brings deep expertise in taxation, compliance, and financial advisory services.
              </p>
              <blockquote className="border-l-4 border-blue-600 dark:border-blue-500 pl-6 italic text-gray-700 dark:text-gray-300 mb-8 max-w-2xl text-lg">
                "I believe in transparent, ethical, and growth-oriented financial guidance that empowers clients to make confident decisions."
              </blockquote>
              <Link
                href="/about"
                className="btn-primary inline-flex items-center gap-2"
              >
                Learn More About Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 dark:bg-slate-900/50 section-padding transition-colors duration-300">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-secondary">
              Our Professional Services
            </h2>
            <p className="text-lead">
              Comprehensive financial, legal, and taxation services structured to help you scale confidently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 border-t-4 border-t-corporate-blue dark:border-t-blue-500 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Taxation Services
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Income Tax Returns, Tax Planning, GST Registration & Returns, TDS & TCS Compliance
              </p>
              <Link href="/services#taxation" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center group">
                Get Assistance <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 border-t-4 border-t-corporate-blue dark:border-t-blue-500 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Business & Startup
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Company/LLP Registration, ROC Compliance, MSME Registration, Startup Advisory
              </p>
              <Link href="/services#business" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center group">
                Get Assistance <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 border-t-4 border-t-corporate-blue dark:border-t-blue-500 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Legal & Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Notice Handling, Statutory Audits, Internal Audits, Regulatory Compliance
              </p>
              <Link href="/services#legal" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center group">
                Get Assistance <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 border-t-4 border-t-corporate-blue dark:border-t-blue-500 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Financial Advisory
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Accounting & Bookkeeping, Financial Projections, CFO Advisory Services
              </p>
              <Link href="/services#financial" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center group">
                Get Assistance <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
