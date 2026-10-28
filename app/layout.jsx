import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/siteUrl";

// Display / Headings: Plus Jakarta Sans (sharp, authoritative, modern engineering & university feel)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--f-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Body / Reading: Inter (clean, highly legible, balanced metrics)
const inter = Inter({
  subsets: ["latin"],
  variable: "--f-text",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sasurie Group of Institutions | Best Educational Institutions in Tamil Nadu",
  description:
    "Sasurie Group of Institutions — Shaping future leaders through academic excellence, innovation, and holistic development across Engineering, Arts & Science, Management, Nursing, Pharmacy, and Education in Tamil Nadu.",
  keywords: [
    "Sasurie Group of Institutions",
    "Sasurie",
    "Sasurie College of Engineering",
    "Sasurie College of Arts and Science",
    "Sasurie College of Pharmacy",
    "Sasurie College of Nursing",
    "Sasurie B-School",
    "Best Educational Institutions in Tamil Nadu",
    "Vijayamangalam",
    "Coimbatore",
    "Tiruppur",
  ],
  openGraph: {
    type: "website",
    siteName: "Sasurie Group of Institutions",
    title: "Sasurie Group of Institutions | Best Educational Institutions in Tamil Nadu",
    description:
      "Transforming lives through quality education. Premier institutions in Engineering, Arts & Science, Management, Nursing, Pharmacy, and Education across Vijayamangalam & Coimbatore campuses.",
    images: [
      {
        url: "/brand/sasurie-og.png",
        width: 1200,
        height: 345,
        alt: "Sasurie Group of Institutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sasurie Group of Institutions",
    description:
      "Leaders are built in layers. Academic excellence, innovation, and industry readiness across Tamil Nadu since 2001.",
    images: ["/brand/sasurie-og.png"],
  },
};

export const viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <script
          dangerouslySetInnerHTML={{
            __html: "try{if('scrollRestoration' in history)history.scrollRestoration='manual';if(location.hash&&!/^#(foundation|competency|exposure|enterprise)$/.test(location.hash))history.replaceState(null,'',location.pathname+location.search);window.scrollTo(0,0);}catch(e){}",
          }}
        />
        <noscript>
          <style>{`.rv,.tw-rise,.line-in,.letter,.word-w>span,.hero-in{opacity:1!important;transform:none!important;filter:none!important;animation:none!important}.loader{display:none!important}.nav{transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
