import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gestión Pro – Sistema simple para comercios con stock",
  description: "Gestión Pro es un sistema simple para comercios con stock: ventas, precios, fiados, stock y ganancias en un solo lugar.",
  keywords: [
    "sistema para comercios con stock",
    "gestión de stock",
    "ventas y precios",
    "control de fiados",
    "ganancias del negocio",
    "software para comercios",
    "WhatsApp Business",
    "software para pymes",
    "punto de venta POS",
    "control de mercadería",
  ],
  authors: [{ name: "Gestión Pro" }],
  creator: "Gestión Pro",
  publisher: "Gestión Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gestionpro.pro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gestión Pro – Sistema simple para comercios con stock",
    description: "El sistema simple para comercios con stock que ordena ventas, precios, fiados, stock y ganancias.",
    url: "https://gestionpro.pro",
    siteName: "Gestión Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gestión Pro - Dashboard de gestión para comercios",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestión Pro – Sistema simple para comercios con stock",
    description: "El sistema simple para comercios con stock que ordena ventas, precios, fiados, stock y ganancias.",
    images: ["/twitter-image.jpg"],
    creator: "@gestionpro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logonuevo.png" />
        <link rel="apple-touch-icon" href="/logonuevo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GestiónPro" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Gestión Pro",
              description: "Sistema simple para comercios con stock: ventas, precios, fiados, stock y ganancias.",
              url: "https://gestionpro.pro",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "25000",
                priceCurrency: "ARS",
                priceValidUntil: "2025-12-31",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
              },
              publisher: {
                "@type": "Organization",
                name: "Gestión Pro",
                url: "https://gestionpro.pro",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
