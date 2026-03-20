import TrustMetrics from '@/components/TrustMetrics'
import CTASection from '@/components/CTASection'
import { FiCheckCircle, FiShield, FiUsers, FiClock, FiAward } from 'react-icons/fi'

// Custom Rupee Icon Component
const RupeeIcon = ({ className }: { className?: string }) => (
  <span className={className} style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: '1' }}>₹</span>
)

export const metadata = {
  title: 'Why Trust Us | Pachnanda and Associates',
  description: 'Discover why over 2000 businesses trust Pachnanda and Associates for their financial, tax, and compliance needs.',
}

const trustPoints = [
  {
    icon: FiAward,
    title: '25+ Years of Professional Experience',
    description: 'Over two and a half decades of expertise in chartered accountancy, taxation, and financial advisory services. We have seen it all and know how to navigate complex situations.',
  },
  {
    icon: FiUsers,
    title: '2000+ B2B Clients Advised',
    description: 'A proven track record of successfully guiding businesses across various industries. Our experience spans startups to established enterprises.',
  },
  {
    icon: RupeeIcon,
    title: 'Fixed Pricing – No Hidden Charges',
    description: 'Transparent pricing with no surprises. We believe in upfront, honest communication about costs, so you can plan your budget with confidence.',
  },
  {
    icon: FiClock,
    title: 'Guaranteed Answer to Your Call',
    description: 'We understand that financial and compliance matters are time-sensitive. Our commitment to responsiveness ensures you always get the support you need, when you need it.',
  },
  {
    icon: FiShield,
    title: 'Ethical, Transparent & Practical Advice',
    description: 'We operate with the highest ethical standards, providing transparent advice that is both legally sound and practically implementable for your business.',
  },
  {
    icon: FiCheckCircle,
    title: 'Direct Senior CA Involvement',
    description: 'CA Sandeep Pachnanda, FCA, DISA, is directly involved in client matters. You get senior-level expertise and attention, not junior staff handling critical issues.',
  },
]

export default function WhyTrustUsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 section-padding transition-colors duration-300">
        <div className="container-custom">
          <h1 className="heading-primary text-center mb-4">
            Why Trust Pachnanda and Associates
          </h1>
          <p className="text-lead text-center max-w-3xl mx-auto">
            We've built our reputation on trust, expertise, and unwavering commitment to client success. Here's what sets us apart.
          </p>
        </div>
      </section>

      <TrustMetrics />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent dark:border-slate-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-50 dark:bg-blue-500/10 p-3 rounded-full">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-slate-950 section-padding transition-colors duration-300">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-8">
              Our Commitment to You
            </h2>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-transparent dark:border-slate-800 transition-colors duration-300">
              <p className="text-lead text-gray-700 dark:text-gray-300 mb-6">
                At Pachnanda and Associates, we do not just provide services—we build lasting partnerships. Our approach is rooted in understanding your unique challenges and delivering solutions that drive real results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Personalized Service:</strong> Every client receives tailored advice based on their specific situation and goals.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Proactive Communication:</strong> We keep you informed about deadlines, changes in regulations, and opportunities to optimize your financial position.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Long-term Partnership:</strong> We are not just here for one-time services. We grow with you, providing ongoing support as your business evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

