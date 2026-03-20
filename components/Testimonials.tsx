export default function Testimonials() {
  const testimonials = [
    {
      name: 'Business Owner',
      company: 'Manufacturing Industry',
      location: 'Jammu',
      text: 'Pachnanda and Associates has been handling our tax and compliance matters for over 10 years. Their expertise and timely advice have been invaluable to our business growth.',
    },
    {
      name: 'Entrepreneur',
      company: 'Technology Startup',
      location: 'Jammu & Kashmir',
      text: 'As a startup, we needed guidance on company registration and GST compliance. The team provided clear, practical solutions that helped us get started quickly and correctly.',
    },
    {
      name: 'Individual Taxpayer',
      company: 'Professional',
      location: 'Jammu',
      text: 'I have been filing my income tax returns through them for years. The process is smooth, transparent, and I always get my queries answered promptly.',
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-12 text-sm">
          Client feedback shared with consent.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-corporate-blue"
            >
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-corporate-dark">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.company}, {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}








