import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Faith & Focus MCAT | Devotional MCAT Prep",
    template: "%s | Faith & Focus MCAT",
  },
  description:
    "Prepare for the MCAT with faith-integrated study materials, expert admissions coaching, and a supportive Christian pre-med community.",
  keywords: [
    "MCAT prep",
    "Christian MCAT",
    "medical school admissions",
    "pre-med community",
    "faith-based MCAT",
  ],
  authors: [{ name: "Faith & Focus MCAT" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faithandfocusmcat.com",
    siteName: "Faith & Focus MCAT",
    title: "Faith & Focus MCAT | Devotional MCAT Prep",
    description:
      "Prepare for the MCAT with faith-integrated study materials, expert admissions coaching, and a supportive Christian pre-med community.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
