import CTASection from '@/components/CTASection'
import { FiCheckCircle, FiPhone, FiMail, FiClock } from 'react-icons/fi'

export const metadata = {
  title: 'Free Consultation | Pachnanda and Associates',
  description: 'Schedule a free consultation with our expert CA team. Get professional advice on tax, compliance, and financial matters.',
}

export default function ConsultationPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-primary text-center mb-4">
              Free Consultation Available
            </h1>
            <p className="text-lead text-center mb-12">
              We offer free consultation for all time lengths. Whether you have a quick question or need comprehensive guidance, we are here to help.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h2 className="heading-secondary mb-6">
                How Our Consultation Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-corporate-blue bg-opacity-10 p-3 rounded-full">
                      <FiPhone className="w-6 h-6 text-corporate-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-corporate-dark mb-2">
                      Reach Out to Us
                    </h3>
                    <p className="text-gray-700">
                      Contact us via phone, email, or the contact form. Our team will respond promptly to understand your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-corporate-blue bg-opacity-10 p-3 rounded-full">
                      <FiClock className="w-6 h-6 text-corporate-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-corporate-dark mb-2">
                      Schedule Your Consultation
                    </h3>
                    <p className="text-gray-700">
                      We'll arrange a convenient time for your consultation. There's no time limit—we'll take as much time as needed to address your concerns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-corporate-blue bg-opacity-10 p-3 rounded-full">
                      <FiCheckCircle className="w-6 h-6 text-corporate-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-corporate-dark mb-2">
                      Get Expert Advice
                    </h3>
                    <p className="text-gray-700">
                      During the consultation, you'll receive professional guidance tailored to your specific situation. We'll explain your options clearly and help you make informed decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-corporate-blue text-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                What You Can Discuss
              </h2>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Income tax planning and filing requirements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>GST registration, returns, and compliance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Business registration and startup guidance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Notice handling and tax assessments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Financial planning and advisory</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Any other tax, compliance, or financial queries</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-corporate-dark mb-4 text-center">
                Ready to Get Started?
              </h3>
              <p className="text-center text-gray-700 mb-6">
                Contact us today to schedule your free consultation. We are here to help you navigate your financial and compliance needs with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919419195996"
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <FiPhone className="w-5 h-5" />
                  <span>Call: +91 9419195996</span>
                </a>
                <a
                  href="mailto:pachnandas28@gmail.com"
                  className="btn-secondary inline-flex items-center justify-center space-x-2"
                >
                  <FiMail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}








