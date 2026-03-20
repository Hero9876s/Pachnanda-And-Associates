'use client'

import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import CTASection from '@/components/CTASection'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    country: '',
    query: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

// inside ContactPage component

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSuccessMessage('')
  setErrorMessage('')

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    let data
    try {
      data = await res.json()
    } catch {
      throw new Error('API not returning JSON. Check /api/contact route.')
    }

    if (!res.ok) {
      throw new Error(data.message || 'Server error')
    }

    setSuccessMessage(data.message)
    setFormData({
      fullName: '',
      contactNumber: '',
      email: '',
      country: '',
      query: '',
    })
  } catch (err: any) {
    setErrorMessage(err.message || 'API route not found or server error')
  } finally {
    setIsSubmitting(false)
  }
}


  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <h1 className="heading-primary text-center mb-4">Get in Touch</h1>
          <p className="text-lead text-center max-w-3xl mx-auto mb-12">
            For any queries or assistance, feel free to reach out to us. We are here to help.
          </p>
s
          {/* FORM + CONTACT INFO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* SEND MESSAGE */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col">
              <h2 className="text-2xl font-semibold text-corporate-dark mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5 flex-1">
                <div>
                  <label className="block text-sm font-semibold mb-1">
  Full Name <span className="text-red-500">*</span>
</label>

                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-corporate-blue"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
  Contact Number <span className="text-red-500">*</span>
</label>

                  <input
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-corporate-blue"
                    placeholder="Enter your contact number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
  Email Address <span className="text-red-500">*</span>
</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-corporate-blue"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
  Country <span className="text-red-500">*</span>
</label>

                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-corporate-blue"
                  >
                    <option value="">Select your country</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>UAE</option>
                    <option>Saudi Arabia</option>
                    <option>Qatar</option>
                    <option>Oman</option>
                    <option>Kuwait</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
  Query / Message <span className="text-red-500">*</span>
</label>

                  <textarea
                    name="query"
                    rows={4}
                    value={formData.query}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-corporate-blue"
                    placeholder="Please describe your query"
                  />
                </div>

                {successMessage && <p className="text-green-600 font-semibold">{successMessage}</p>}
                {errorMessage && <p className="text-red-600 font-semibold">{errorMessage}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-corporate-blue text-white py-3 rounded-lg font-semibold hover:bg-[#163a5f] transition"
                >
                  {isSubmitting ? 'Submitting…' : 'Submit Query'}
                </button>
              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col">
              <h2 className="text-2xl font-semibold text-corporate-dark mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="bg-corporate-blue/10 p-3 rounded-full">
                    <FiPhone className="text-corporate-blue w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-700">+91 9419195996</p>
                    <p className="text-gray-700">+91 7006341525</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-corporate-blue/10 p-3 rounded-full">
                    <FiMail className="text-corporate-blue w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-700">pachnandas28@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-corporate-blue/10 p-3 rounded-full">
                    <FiMapPin className="text-corporate-blue w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Office Address</p>
                    <p className="text-gray-700">
                      Plot No. 7/8, Adjoining SBI,<br />
                      Sector 6A, Trikuta Nagar,<br />
                      Jammu – 180020
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* MAP – FULL WIDTH */}
          <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Find Us on Map</h3>

            <div className="rounded-lg overflow-hidden border">
              <iframe
                title="Pachnanda and Associates Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.571291422653!2d74.8756671!3d32.697443899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e83647bbbf1eb%3A0x7281d7003b52cbe7!2sPACHNANDA%20%26%20ASSOCIATES%20CHARTERED%20ACCOUNTANTS!5e0!3m2!1sen!2sin!4v1765890428958"
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="text-center mt-4">
              <a
                href="https://maps.google.com/?q=PACHNANDA+%26+ASSOCIATES+CHARTERED+ACCOUNTANTS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#163a5f]"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  )
}
