import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </main>
      <Footer />
    </div>
  );
}
