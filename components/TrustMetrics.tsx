import { FiAward, FiUsers, FiPhone } from 'react-icons/fi'

// Custom Rupee Icon Component
const RupeeIcon = ({ className }: { className?: string }) => (
  <span className={className} style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: '1' }}>₹</span>
)

const metrics = [
  {
    icon: FiAward,
    value: '25+',
    label: 'Years of Experience',
    description: 'Decades of professional excellence',
  },
  {
    icon: FiUsers,
    value: '2000+',
    label: 'B2B Clients Advised',
    description: 'Trusted by businesses across India',
  },
  {
    icon: RupeeIcon,
    value: 'Fixed',
    label: 'Pricing',
    description: 'No hidden charges',
  },
  {
    icon: FiPhone,
    value: 'Guaranteed',
    label: 'Answer to Your Call',
    description: 'Always available for clients',
  },
]

export default function TrustMetrics() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-12">
          Why Businesses Trust Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-corporate-blue bg-opacity-10 p-4 rounded-full">
                    <Icon className="w-8 h-8 text-corporate-blue" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-corporate-blue mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

