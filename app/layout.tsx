import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyContactButtons from '@/components/StickyContactButtons'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Pachnanda and Associates | Chartered Accountants | Jammu, J&K',
  description: 'Trusted Chartered Accountants delivering tax, compliance & financial clarity for over 25+ years. Expert CA services in Jammu, Jammu & Kashmir.',
  keywords: 'Chartered Accountant, CA, Tax Services, GST, Income Tax, Compliance, Jammu, Jammu & Kashmir, Financial Advisory',
  authors: [{ name: 'Pachnanda and Associates' }],
  openGraph: {
    title: 'Pachnanda and Associates | Chartered Accountants',
    description: 'Trusted Chartered Accountants delivering tax, compliance & financial clarity for over 25+ years.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyContactButtons />
        </ThemeProvider>
      </body>
    </html>
  )
}

