import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "react-hot-toast";
import GAInit from "@/components/Ga";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ritik Gupta | Full Stack Software Engineer",
  description: "I build fast, scalable, and production-ready web applications from the ground up — handling everything from frontend design to backend architecture and deployment.",
  openGraph: {
    title: "Ritik Gupta | Full Stack Software Engineer",
    description: "I build fast, scalable, and production-ready web applications from the ground up — handling everything from frontend design to backend architecture and deployment.",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 600,
        alt: "Ritik Gupta",
      },
    ],
  },
  twitter: {
    title: "Ritik Gupta | Full Stack Software Engineer",
    description: "I build fast, scalable, and production-ready web applications from the ground up — handling everything from frontend design to backend architecture and deployment.",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 600,
        alt: "Ritik Gupta",
      },
    ],
  },
  icons: {
    icon: "/avatar.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50 dark:bg-[#09090b] text-zinc-950 dark:text-zinc-50 antialiased`}>
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
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
