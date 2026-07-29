import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dong Zhang | Academic Homepage",
  description:
    "Bilingual academic homepage of Dong Zhang, an undergraduate physics student at Tianjin University interested in high-energy theory and AI for Science.",
  keywords: [
    "Dong Zhang",
    "张东",
    "Tianjin University",
    "Physics",
    "High-Energy Theory",
    "AI for Science",
  ],
  authors: [{ name: "Dong Zhang" }],
  openGraph: {
    title: "Dong Zhang | Academic Homepage",
    description:
      "Physics undergraduate at Tianjin University · High-Energy Theory · AI for Science",
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
