import FounderImage from '@/components/FounderImage'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: "Founder's Story | Pachnanda and Associates",
  description: 'Learn about CA Sandeep Pachnanda, FCA, DISA, and his journey as the founder of Pachnanda and Associates.',
}

export default function FoundersStoryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-white section-padding">
        <div className="container-custom">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-corporate-blue">
  Founder's Story
</h1>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FounderImage size="large" />
              <div>
                <h2 className="heading-secondary mb-6">
                  CA Sandeep Pachnanda, FCA, DISA
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lead">
                    Founder of Pachnanda and Associates, CA Sandeep Pachnanda brings over 25+ years of professional experience in chartered accountancy, taxation, and financial advisory services.
                  </p>
                  <div>
                    <h3 className="font-semibold text-corporate-dark mb-2">Qualifications:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Fellow Chartered Accountant (FCA)</li>
                      <li>Diploma in Information Systems Audit (DISA)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-corporate-dark mb-2">Experience & Approach:</h3>
                    <p>
                      With a client-centric approach, CA Sandeep Pachnanda has guided over 2000 B2B clients through complex financial, taxation, and compliance challenges. His expertise spans income tax, GST, company law, statutory audits, and financial planning.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-corporate-dark mb-2">Ethics & Transparency:</h3>
                    <p>
                      The firm operates on principles of ethical practice, transparency, and fixed pricing with no hidden charges. Every client interaction is handled with professionalism and direct senior CA involvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder's Thinking */}
            <div className="mt-12 bg-gradient-to-r from-corporate-blue to-[#163a5f] text-white p-8 rounded-lg shadow-xl border-l-4 border-yellow-400">
              <h3 className="text-2xl font-semibold mb-4">
                Founder's Thinking
              </h3>
              <blockquote className="text-xl italic leading-relaxed">
                "I believe in transparent, ethical, and growth-oriented financial guidance that empowers clients to make confident decisions."
              </blockquote>
              <p className="mt-4 text-blue-100">
                — CA Sandeep Pachnanda, FCA, DISA
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

