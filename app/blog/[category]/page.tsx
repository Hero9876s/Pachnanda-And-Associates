import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FiArrowLeft } from 'react-icons/fi'

const categories: Record<string, { title: string; description: string }> = {
  'income-tax': {
    title: 'Income Tax',
    description: 'Latest updates, tips, and guidance on income tax planning and filing.',
  },
  'gst-updates': {
    title: 'GST Updates',
    description: 'Stay informed about GST regulations, changes, and compliance requirements.',
  },
  'compliance-deadlines': {
    title: 'Compliance Deadlines',
    description: 'Important dates and deadlines for tax filings and regulatory compliance.',
  },
  'financial-planning': {
    title: 'Financial Planning for Businesses',
    description: 'Strategic financial planning advice to help your business grow and thrive.',
  },
}

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  const category = categories[params.category]

  if (!category) {
    notFound()
  }

  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-corporate-blue hover:underline mb-8"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Back to Blog</span>
        </Link>

        <h1 className="heading-primary mb-4">{category.title}</h1>
        <p className="text-lead text-gray-700 mb-12">{category.description}</p>

        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-corporate-dark mb-4">
            Articles Coming Soon
          </h2>
          <p className="text-gray-700 mb-6">
            We're preparing valuable content for this category. Check back soon for expert insights and updates.
          </p>
          <Link href="/blog" className="btn-primary inline-block">
            Return to Blog
          </Link>
        </div>
      </div>
    </section>
  )
}








