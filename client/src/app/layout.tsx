import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Developer Portfolio | Full Stack Engineer",
  description: "Full-stack developer specializing in MERN, SQL, Python, Java, C++. Building elegant solutions for complex problems.",
  keywords: ["full stack developer", "MERN", "SQL", "Python", "Java", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body bg-background text-foreground antialiased`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}