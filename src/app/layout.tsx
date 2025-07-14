import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Providers } from "./provider";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Piya TRADING",
    template: "%s | Piya",
  },
  description: "Piya is a fast, elegant and modern web application designed to deliver a premium user experience.",
  keywords: ["piya", "modern ui", "nextjs", "tailwind", "quicksand", "ecommerce"],
  openGraph: {
    title: "Piya",
    description: "Premium user experience with modern design and performance.",
    url: "https://piya.vercel.app",
    siteName: "Piya",
    images: [
      {
        url: "http://localhost:3000/p-og.png",
        width: 1200,
        height: 630,
        alt: "Piya - Modern UI",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
