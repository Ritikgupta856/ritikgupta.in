import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "react-hot-toast";
import GAInit from "@/components/ga";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

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
        url: "https://ritikgupta.in/images/avatar.jpg",
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
    images: ["https://ritikgupta.in/images/avatar.jpg"], 
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
    icon: [
      { url: "/images/avatar.jpg", type: "image/jpeg" },
    ],
    apple: [{ url: "/images/avatar.jpg", sizes: "180x180" }],
  },


  applicationName: "Ritik Gupta Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-zinc-50 text-zinc-950 antialiased dark:bg-[#09090b] dark:text-zinc-50`}
      >
        <GAInit />
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <ScrollToTop />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
