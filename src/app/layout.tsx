import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/lib/data";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: "Mena Maged | Full-Stack Software Engineer",
  description:
    "Mena Maged - Full-Stack Software Engineer and Co-Founder/CTO at CodeX Technologies, specializing in Next.js, Node.js, and end-to-end web application development. Based in Giza, Egypt.",
  keywords: [
    "Mena Maged",
    "software engineer",
    "full-stack developer",
    "Next.js developer",
    "CodeX Technologies",
    "co-founder",
    "CTO",
    "Egypt",
    "portfolio",
  ],
  authors: [{ name: "Mena Maged", url: profile.website }],
  creator: "Mena Maged",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Mena Maged | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer and Co-Founder/CTO at CodeX Technologies, building web applications end-to-end since 2018.",
    url: profile.website,
    siteName: "Mena Maged",
    locale: "en_US",
    type: "profile",
    firstName: "Mena",
    lastName: "Maged",
    images: ["https://www.gravatar.com/avatar/6081a95fe5ac5d6a8467ca1b3401baa7?size=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mena Maged | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer and Co-Founder/CTO at CodeX Technologies, building web applications end-to-end since 2018.",
    images: ["https://www.gravatar.com/avatar/6081a95fe5ac5d6a8467ca1b3401baa7?size=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-[family-name:var(--font-text)] bg-bg text-text antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
