import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Pachnanda and Associates',
  description: 'Get in touch with Pachnanda and Associates. Contact us for tax, compliance, and financial advisory services in Jammu, J&K.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}








