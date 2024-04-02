
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import CompHeader from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MacKenzie Richards",
  description: "MacKenzie Richards' Portfolio",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark' >
      <body suppressHydrationWarning={true}>
        <Providers>         
          {children}
          <Analytics/>
          <SpeedInsights/>
        </Providers>
      </body>
    </html>
  );
}
