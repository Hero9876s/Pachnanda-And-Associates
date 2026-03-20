"use client";

// export const metadata = {
//   title: 'Privacy Policy | Pachnanda and Associates',
//   description: 'Privacy Policy for Pachnanda and Associates website.',
// }

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container-custom max-w-4xl">
        <h1 className="heading-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            Last updated: July 2026
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
            <p>
              Pachnanda and Associates ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details provided through our contact forms or consultation requests.</li>
              <li><strong>Business Information:</strong> Company name, business type, and other relevant business details.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, and website usage data collected through cookies and similar technologies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To respond to your inquiries and provide requested services</li>
              <li>To communicate with you about our services and updates</li>
              <li>To improve our website and services</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>With service providers who assist us in operating our website and conducting our business (under strict confidentiality agreements)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and receive a copy of your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience. You can set your browser to refuse cookies, but this may limit some website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-transparent dark:border-slate-800 transition-colors duration-300 mt-6 mb-12">
              <p><strong className="text-gray-900 dark:text-white">Pachnanda and Associates</strong></p>
              <p>Email: <a href="mailto:pachnandas28@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">pachnandas28@gmail.com</a></p>
              <p>Phone: <a href="tel:+919419195996" className="text-blue-600 dark:text-blue-400 hover:underline">+91 9419195996</a></p>
              <p className="mt-4 leading-relaxed">
                Plot No. 7/8, Adjoining SBI,<br />
                Sector 6A, Trikuta Nagar,<br />
                Jammu, Jammu & Kashmir – 180020
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}