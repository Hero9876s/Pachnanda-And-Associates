export const metadata = {
  title: 'Terms & Conditions | Pachnanda and Associates',
  description: 'Terms and Conditions for Pachnanda and Associates website.',
}

export default function TermsConditionsPage() {
  return (
    <section className="section-padding bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container-custom max-w-4xl">
        <h1 className="heading-primary mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of Pachnanda and Associates ("the Firm"), you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Professional Services</h2>
            <p>
              The information provided on this website is for general informational purposes only and does not constitute professional advice. Professional services are provided only after:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Formal engagement with the Firm</li>
              <li>Execution of a written engagement letter</li>
              <li>Agreement on terms and conditions of service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Pachnanda and Associates or its content suppliers and is protected by Indian and international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Pachnanda and Associates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Your continued use of the website after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Jammu, Jammu & Kashmir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Contact Information</h2>
            <p>
              For any questions regarding these Terms and Conditions, please contact us:
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








