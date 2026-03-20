import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'

export const metadata = {
  title: 'Blog & Knowledge Hub | Pachnanda and Associates',
  description: 'Stay updated with the latest insights on income tax, GST, compliance deadlines, and financial planning for businesses.',
}

// Placeholder blog structure - no articles yet
const blogCategories = [
  {
    id: 'income-tax',
    title: 'Income Tax',
    description: 'Latest updates, tips, and guidance on income tax planning and filing.',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    id: 'gst-updates',
    title: 'GST Updates',
    description: 'Stay informed about GST regulations, changes, and compliance requirements.',
    color: 'bg-green-100 text-green-800',
  },
  {
    id: 'compliance-deadlines',
    title: 'Compliance Deadlines',
    description: 'Important dates and deadlines for tax filings and regulatory compliance.',
    color: 'bg-orange-100 text-orange-800',
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning for Businesses',
    description: 'Strategic financial planning advice to help your business grow and thrive.',
    color: 'bg-purple-100 text-purple-800',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 section-padding transition-colors duration-300">
        <div className="container-custom">
          <h1 className="heading-primary text-center mb-4">
            Blog & Knowledge Hub
          </h1>
          <p className="text-lead text-center max-w-3xl mx-auto mb-12">
            Stay informed with expert insights on taxation, compliance, and financial planning. Our knowledge hub is designed to help you make informed decisions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-l-blue-600 dark:border-l-blue-500"
              >
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${category.color}`}>
                  {category.title}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                <Link
                  href={`/blog/${category.id}`}
                  className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center space-x-2"
                >
                  <span>Explore Articles</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-2xl text-center shadow-xl border border-transparent dark:border-slate-800 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Articles Coming Soon
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We're preparing valuable content to help you stay updated with the latest in taxation, compliance, and financial planning. Check back soon!
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              In the meantime, feel free to <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact us</Link> with any questions.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}








