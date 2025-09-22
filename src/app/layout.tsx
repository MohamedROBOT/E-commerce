import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/sonner";

import Providers from "@/Providers";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exculsive Store",
  description:
    "Exculsive Store is an e-commerce platform that offers a wide range of exclusive products from various categories. From fashion to electronics, we have everything you need to live a luxurious lifestyle. Our products are carefully curated to ensure that only the best and most exclusive items are available to our customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
         
          <Providers >
            <Navbar />
          <Toaster />
          <main>{children}</main>
          {/* footer */}
          </Providers>
       
      </body>
    </html>
  );
}
