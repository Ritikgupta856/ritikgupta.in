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
    "Web Development",
  ],
  authors: [{ name: "Ritik Gupta", url: "https://ritikgupta.in" }],
  creator: "Ritik Gupta",
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
        url: "/images/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Ritik Gupta - Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Gupta | Full Stack Software Engineer",
    description:
      "I build fast, scalable, and production-ready web applications from the ground up — handling everything from frontend design to backend architecture and deployment.",
    creator: "@ritikgupta856",
    images: ["/images/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/avatar.jpg",
    shortcut: "/images/avatar.jpg",
    apple: "/images/avatar.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
