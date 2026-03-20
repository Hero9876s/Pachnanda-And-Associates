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
    <section className="bg-gray-50 dark:bg-slate-900/50 section-padding transition-colors duration-300">
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
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent dark:border-slate-800 text-center transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-50 dark:bg-blue-500/10 p-4 rounded-2xl shadow-inner">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-blue-700 dark:text-blue-500 mb-3 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-zinc-100 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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

