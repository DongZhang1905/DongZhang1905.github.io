import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dong Zhang | Academic Homepage",
  description:
    "Bilingual academic homepage of Dong Zhang, a physics undergraduate at Tianjin University interested in high-energy theory, AI for Science, learning theory, and embodied intelligence.",
  keywords: [
    "Dong Zhang",
    "张东",
    "Tianjin University",
    "Physics",
    "High-Energy Theory",
    "AI for Science",
    "Learning Theory",
    "Embodied Intelligence",
    "Philosophy",
  ],
  authors: [{ name: "Dong Zhang" }],
  openGraph: {
    title: "Dong Zhang | Academic Homepage",
    description:
      "Physics undergraduate at Tianjin University · High-Energy Theory · AI for Science · Learning Theory · Embodied Intelligence",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
