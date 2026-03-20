import FounderImage from '@/components/FounderImage'
import TrustMetrics from '@/components/TrustMetrics'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'About | Pachnanda and Associates',
  description: 'Learn about Pachnanda and Associates, a trusted Chartered Accountant firm with over 25+ years of experience serving businesses across India.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#1f4e79] to-[#163a5f] py-20 text-white">
        <div className="container-custom">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
            About Pachnanda and Associates
          </h1>
          <p className="text-lead text-center max-w-3xl mx-auto text-blue-100 mb-12">
            A trusted Chartered Accountant firm delivering comprehensive financial, taxation, and compliance services with over 25+ years of professional excellence.
          </p>
        </div>
      </section>

      <TrustMetrics />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FounderImage size="large" />
            <div>
              <h2 className="heading-secondary mb-6">
                Our Firm
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="text-lead">
                  Pachnanda and Associates is a leading Chartered Accountant firm based in Jammu, Jammu & Kashmir, established in 1997. We specialize in providing comprehensive financial, taxation, compliance, and legal assistance services to businesses and individuals across India.
                </p>
                <p>
                  With over 25+ years of experience and a team of dedicated professionals, we have successfully guided more than 2000 B2B clients through complex financial challenges, helping them achieve growth, compliance, and financial clarity.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-lg border-l-4 border-corporate-blue dark:border-blue-500">
                  <h3 className="font-semibold text-corporate-dark dark:text-white mb-2">Our Mission:</h3>
                  <p>
                    To provide transparent, ethical, and practical financial guidance that empowers our clients to make confident decisions and achieve their business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-950 section-padding transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-corporate-blue dark:border-blue-500">
              <h3 className="text-xl font-semibold text-corporate-dark dark:text-white mb-3">Our Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Specialized knowledge in income tax, GST, company law, statutory audits, and financial planning.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-600 dark:border-purple-500">
              <h3 className="text-xl font-semibold text-corporate-dark dark:text-white mb-3">Our Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Client-centric, transparent, and ethical practices with fixed pricing and no hidden charges.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-600 dark:border-indigo-500">
              <h3 className="text-xl font-semibold text-corporate-dark dark:text-white mb-3">Our Commitment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Direct senior CA involvement in every client matter, ensuring personalized attention and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
  <div className="container-custom">
    <div className="bg-corporate-blue text-white p-8 rounded-lg shadow-xl">
      <h2 className="heading-secondary text-white mb-6 text-center">
        Learn More
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/founders-story"
          className="bg-white dark:bg-slate-800 text-corporate-blue dark:text-blue-400 p-6 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors text-center"
        >
          <h3 className="text-xl font-semibold mb-2">
            Founder&apos;s Story
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Learn about CA Sandeep Pachnanda
          </p>
        </Link>

        <Link
          href="/our-story"
          className="bg-white dark:bg-slate-800 text-corporate-blue dark:text-blue-400 p-6 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors text-center"
        >
          <h3 className="text-xl font-semibold mb-2">
            Our Story
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Discover our journey since 1997
          </p>
        </Link>
      </div>
    </div>
  </div>
</section>


      <CTASection />
    </>
  )
}
