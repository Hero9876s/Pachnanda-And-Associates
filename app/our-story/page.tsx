import FounderImage from '@/components/FounderImage'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Our Story | Pachnanda and Associates',
  description: 'Learn about the journey of Pachnanda and Associates from a modest beginning in 1997 to becoming a trusted CA firm in Jammu & Kashmir.',
}

export default function OurStoryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <h1 className="heading-primary text-center mb-12">
            Our Story
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <FounderImage size="medium" />
              </div>
              <div>
                <h2 className="heading-secondary mb-6">
                  A Journey of Growth and Trust
                </h2>
                <div className="space-y-4 text-gray-700 text-lead">
                  <p>
                    Pachnanda and Associates was founded in 1997 under the visionary leadership of CA Sandeep Pachnanda. What began as a modest two-room rented office in Kanak Mandi, Jammu and Kashmir, has evolved into a vibrant professional firm with a dedicated team of experts.
                  </p>
                  <p>
                    Starting as a one-person venture, the firm's commitment to excellence and client-centric service has driven its steady growth over the years. Today, we stand as a trusted partner to businesses and individuals across India.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="heading-secondary mb-6">
                Our Commitment
              </h2>
              <p className="text-lead text-gray-700 mb-6">
                For more than 25 years, Pachnanda and Associates has been committed to helping Indian business owners and individual taxpayers achieve their financial goals. We understand that navigating taxation, compliance, and financial planning can be overwhelming.
              </p>
              <p className="text-lead text-gray-700 mb-6">
                Our approach is built on three core principles:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-corporate-blue mb-2">25+</div>
                  <div className="font-semibold text-corporate-dark mb-2">Years of Service</div>
                  <div className="text-sm text-gray-600">
                    Dedicated to client success
                  </div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-corporate-blue mb-2">2000+</div>
                  <div className="font-semibold text-corporate-dark mb-2">Clients Served</div>
                  <div className="text-sm text-gray-600">
                    Trusted by businesses nationwide
                  </div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-corporate-blue mb-2">100%</div>
                  <div className="font-semibold text-corporate-dark mb-2">Ethical Practice</div>
                  <div className="text-sm text-gray-600">
                    Transparent and reliable
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-corporate-dark mb-4">
                Deep Understanding, Practical Solutions
              </h3>
              <p className="text-lead text-gray-700">
                We believe in deeply understanding our clients' challenges and providing practical, ethical solutions that enable them to grow, remain compliant, and live stress-free financial lives. Whether you're a startup navigating company registration or an established business managing complex tax obligations, we're here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}








