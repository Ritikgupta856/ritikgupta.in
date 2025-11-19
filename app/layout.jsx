import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "react-hot-toast";
import GAInit from "@/components/Ga";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ritik Gupta | Full Stack Developer",
  description: "Personal portfolio website showcasing my skills and projects.",
   icons: {
    icon: "/avatar.jpg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GAInit/>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
