import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { FiArrowRight } from 'react-icons/fi'

export const metadata = {
  title: 'Services | Pachnanda and Associates',
  description: 'Comprehensive CA services including taxation, business registration, compliance, and financial advisory in Jammu, J&K.',
}

const services = [
  {
    id: 'taxation',
    title: 'Taxation Services',
    description: 'Expert tax planning, filing, and compliance services to help you stay compliant and optimize your tax obligations.',
    items: [
      {
        name: 'Income Tax Returns',
        description: 'Accurate and timely filing of individual and business income tax returns.',
      },
      {
        name: 'Tax Planning & Advisory',
        description: 'Strategic tax planning to minimize liabilities while ensuring full compliance.',
      },
      {
        name: 'GST Registration & Returns',
        description: 'Complete GST registration, return filing, and compliance management.',
      },
      {
        name: 'TDS & TCS Compliance',
        description: 'Comprehensive TDS and TCS compliance, filing, and advisory services.',
      },
    ],
  },
  {
    id: 'business',
    title: 'Business & Startup Services',
    description: 'End-to-end support for business formation, registration, and ongoing compliance requirements.',
    items: [
      {
        name: 'Company / LLP / Firm Registration',
        description: 'Assistance with registration of Private Limited Companies, LLPs, and Partnership Firms.',
      },
      {
        name: 'ROC Compliance',
        description: 'Annual filing, board meetings, and all ROC compliance requirements.',
      },
      {
        name: 'MSME Registration',
        description: 'MSME registration and benefits advisory for small and medium enterprises.',
      },
      {
        name: 'Startup Advisory',
        description: 'Comprehensive guidance for startups on legal, financial, and compliance matters.',
      },
    ],
  },
  {
    id: 'legal',
    title: 'Legal & Compliance Assistance',
    description: 'Professional representation and compliance services to protect your business interests.',
    items: [
      {
        name: 'Notice Handling & Representation',
        description: 'Expert handling of tax notices, assessments, and representation before authorities.',
      },
      {
        name: 'Statutory Audits',
        description: 'Comprehensive statutory audit services as per Companies Act and other regulations.',
      },
      {
        name: 'Internal Audits',
        description: 'Internal audit services to strengthen internal controls and processes.',
      },
      {
        name: 'Regulatory Compliance',
        description: 'Ongoing compliance management for all statutory and regulatory requirements.',
      },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Advisory',
    description: 'Strategic financial planning and advisory services to drive business growth and stability.',
    items: [
      {
        name: 'Accounting & Bookkeeping',
        description: 'Professional accounting and bookkeeping services for accurate financial records.',
      },
      {
        name: 'Financial Projections',
        description: 'Detailed financial projections and forecasting for business planning.',
      },
      {
        name: 'CFO Advisory Services',
        description: 'Strategic CFO-level advisory for financial decision-making and growth.',
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <h1 className="heading-primary text-center mb-4">
            Our Professional Services
          </h1>
          <p className="text-lead text-center max-w-3xl mx-auto mb-12">
            Comprehensive chartered accountancy services designed to help your business grow, remain compliant, and achieve financial clarity.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="heading-secondary mb-4">{service.title}</h2>
                  <p className="text-lead text-gray-700 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {service.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border-l-4 border-corporate-blue pl-4 py-2"
                      >
                        <h3 className="text-xl font-semibold text-corporate-dark mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Get Assistance</span>
                    <FiArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}








