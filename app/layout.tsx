import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { generateLocalBusinessSchema } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autodetail Vermeij - Premium Autodetailing Regio Gouda/Reeuwijk',
  description: 'Professionele autodetailing in Regio Gouda/Reeuwijk. Lakcorrectie, keramische coating, interieur en exterieur detailing. Premium kwaliteit voor uw auto.',
  keywords: 'autodetailing, lakcorrectie, keramische coating, auto detailing, Gouda, Reeuwijk, premium detailing',
  authors: [{ name: 'Autodetail Vermeij' }],
  creator: 'Autodetail Vermeij',
  publisher: 'Autodetail Vermeij',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://autodetail-vermeij.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://autodetail-vermeij.nl',
    title: 'Autodetail Vermeij - Premium Autodetailing',
    description: 'Professionele autodetailing in Regio Gouda/Reeuwijk. Lakcorrectie, keramische coating en meer.',
    siteName: 'Autodetail Vermeij',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autodetail Vermeij - Premium Autodetailing',
    description: 'Professionele autodetailing in Regio Gouda/Reeuwijk.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
