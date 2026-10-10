import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ThemeScript from "@/components/ui/theme-script";
import GAInit from "@/components/ga";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Quote from "@/components/quote";
import ScrollToTop from "@/components/scroll-to-top";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  metadataBase: new URL("https://ritikgupta.in"),
  title: {
    default: "Ritik Gupta | Full Stack Software Engineer",
    template: "%s | Ritik Gupta",
  },
  description:
    "I build fast, scalable, and production-ready web applications from the ground up — handling everything from frontend design to backend architecture and deployment.",
  keywords: [
    "Ritik Gupta",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "India",
  ],
  authors: [{ name: "Ritik Gupta", url: "https://ritikgupta.in" }],
  creator: "Ritik Gupta",
  publisher: "Ritik Gupta",

  alternates: {
    canonical: "https://ritikgupta.in",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ritikgupta.in",
    title: "Ritik Gupta | Full Stack Software Engineer",
    description:
      "I build fast, scalable, and production-ready web applications from the ground up — handling everything from frontend design to backend architecture and deployment.",
    siteName: "Ritik Gupta Portfolio",
    images: [
      {
        url: "https://ritikgupta.in/images/avatar.png",
        width: 1200,
        height: 630,
        alt: "Ritik Gupta - Full Stack Software Engineer",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@ritikgupta856",
    creator: "@ritikgupta856",
    title: "Ritik Gupta | Full Stack Software Engineer",
    description:
      "I build fast, scalable, and production-ready web applications from the ground up — handling everything from frontend design to backend architecture and deployment.",
    images: ["https://ritikgupta.in/images/avatar.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [{ url: "/images/avatar.png", type: "image/jpeg" }],
    apple: [{ url: "/images/avatar.png", sizes: "180x180" }],
  },

  applicationName: "Ritik Gupta Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeScript />
        <GAInit />
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Quote />
            <ScrollToTop />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
