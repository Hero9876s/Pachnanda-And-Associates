import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section-padding min-h-screen flex items-center">
      <div className="container-custom text-center">
        <h1 className="text-6xl font-bold text-corporate-blue mb-4">404</h1>
        <h2 className="heading-secondary mb-4">Page Not Found</h2>
        <p className="text-lead text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </section>
  )
}








