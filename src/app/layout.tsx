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
  icons: {
    icon: "/favicon.ico",
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
