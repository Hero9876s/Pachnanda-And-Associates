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
    <section className="section-padding bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-sm">
          Client feedback shared with consent.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-slate-800 border-l-4 border-l-corporate-blue dark:border-l-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 dark:border-slate-800 transition-colors pt-4">
                <p className="font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
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








