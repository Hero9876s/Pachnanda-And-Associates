import Link from 'next/link'

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function CTASection({
  title = 'Ready to Get Started?',
  description = 'Let us help you navigate your financial and compliance needs with confidence.',
  primaryButtonText = 'Get in Touch',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'Request Assistance',
  secondaryButtonLink = '/consultation',
}: CTASectionProps) {
  return (
    <section className="bg-corporate-blue text-white section-padding">
      <div className="container-custom text-center">
        <h2 className="heading-secondary text-white mb-4">{title}</h2>
        <p className="text-lead text-blue-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryButtonLink} className="bg-white text-corporate-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-md hover:shadow-lg">
            {primaryButtonText}
          </Link>
          <Link href={secondaryButtonLink} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-corporate-blue transition-colors duration-200">
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  )
}

