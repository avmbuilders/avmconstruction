import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avmconstructions.vercel.app"),
  title: {
    default: "AVM Constructions | Quality Construction & Interiors",
    template: "%s | AVM Constructions",
  },
  description: "AVM Constructions - We Build Today... You Live Tomorrow. Delivering quality construction and elegant interiors across Vriddhachalam (Virudhachalam) and Andimadam.",
  keywords: ["Construction", "Interiors", "Vriddhachalam", "Virudhachalam", "Andimadam", "AVM Constructions", "Builders", "Home Design", "Architecture"],
  authors: [{ name: "AVM Constructions" }],
  creator: "AVM Constructions",
  publisher: "AVM Constructions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AVM Constructions",
    description: "Delivering quality construction and elegant interiors across Vriddhachalam (Virudhachalam) and Andimadam.",
    url: "https://avmconstructions.vercel.app",
    siteName: "AVM Constructions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVM Constructions",
    description: "Delivering quality construction and elegant interiors across Vriddhachalam (Virudhachalam) and Andimadam.",
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
  appleWebApp: {
    title: "AVM Constructions",
    statusBarStyle: "default",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ConstructionBusiness",
  name: "AVM Constructions",
  image: "https://avmconstructions.vercel.app/icon1.png",
  description: "AVM Constructions - We Build Today... You Live Tomorrow. Delivering quality construction and elegant interiors across Vriddhachalam (Virudhachalam) and Andimadam.",
  url: "https://avmconstructions.vercel.app",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vriddhachalam",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN"
  },
  areaServed: ["Vriddhachalam", "Virudhachalam", "Andimadam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
