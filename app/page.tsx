import Link from 'next/link'
import FounderImage from '@/components/FounderImage'
import TrustMetrics from '@/components/TrustMetrics'
import CTASection from '@/components/CTASection'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
<section className="bg-[#2a5b88] text-white py-20">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
          Trusted Chartered Accountants Delivering Tax, Compliance & Financial Clarity for Over 25+ Years
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8">
          We help Indian business owners and individual taxpayers grow, remain compliant, and live stress-free financial lives through practical, ethical solutions tailored to your needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-white text-[#2a5b88] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg text-center"
          >
            Get in Touch
          </Link>

          <Link
            href="/consultation"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2a5b88] transition-all duration-200 text-center"
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FounderImage size="medium" />
            <div>
              <h2 className="heading-secondary">
                Meet CA Sandeep Pachnanda
              </h2>
              <p className="text-lead mb-6">
                With over 25+ years of professional experience, CA Sandeep Pachnanda leads Pachnanda and Associates with a commitment to transparent, ethical, and growth-oriented financial guidance.
              </p>
              <p className="text-gray-700 mb-6">
                As a Fellow Chartered Accountant (FCA) and holder of the DISA (Diploma in Information Systems Audit) qualification, he brings deep expertise in taxation, compliance, and financial advisory services.
              </p>
              <blockquote className="border-l-4 border-corporate-blue pl-6 italic text-gray-700 mb-6">
                "I believe in transparent, ethical, and growth-oriented financial guidance that empowers clients to make confident decisions."
              </blockquote>
              <Link
                href="/about"
                className="bg-corporate-blue hover:bg-[#163a5f] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">
            Our Professional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-corporate-blue transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-corporate-dark mb-3">
                Taxation Services
              </h3>
              <p className="text-gray-600 mb-4">
                Income Tax Returns, Tax Planning, GST Registration & Returns, TDS & TCS Compliance
              </p>
              <Link href="/services#taxation" className="text-corporate-blue font-semibold hover:underline inline-flex items-center">
                Get Assistance <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-corporate-blue transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-corporate-dark mb-3">
                Business & Startup
              </h3>
              <p className="text-gray-600 mb-4">
                Company/LLP Registration, ROC Compliance, MSME Registration, Startup Advisory
              </p>
              <Link href="/services#business" className="text-corporate-blue font-semibold hover:underline inline-flex items-center">
                Get Assistance <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-corporate-blue transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-corporate-dark mb-3">
                Legal & Compliance
              </h3>
              <p className="text-gray-600 mb-4">
                Notice Handling, Statutory Audits, Internal Audits, Regulatory Compliance
              </p>
              <Link href="/services#legal" className="text-corporate-blue font-semibold hover:underline inline-flex items-center">
                Get Assistance <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-corporate-blue transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-corporate-dark mb-3">
                Financial Advisory
              </h3>
              <p className="text-gray-600 mb-4">
                Accounting & Bookkeeping, Financial Projections, CFO Advisory Services
              </p>
              <Link href="/services#financial" className="text-corporate-blue font-semibold hover:underline inline-flex items-center">
                Get Assistance <span className="ml-1">→</span>
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
