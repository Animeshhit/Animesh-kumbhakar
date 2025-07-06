import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://animesh-kumbhakar.vercel.app"),
  title: "Animesh Kumbahar",
  description: `I'm a passionate full stack web developer skilled in Next.js, React, Node.js, and MongoDB, dedicated to building robust, scalable applications with seamless user experiences. I enjoy working across the stack—from crafting responsive, intuitive frontends to developing secure, efficient backends and managing databases. Always eager to learn and improve, I strive to turn complex problems into clean, maintainable solutions that delight users and drive real impact.`,
  authors: [
    { name: "Animesh Kumbhakar", url: "www.linkedin.com/in/animesh-kumbhakar" },
  ],
  openGraph: {
    url: "https://animesh-kumbhakar.vercel.app",
    title: "Animesh Kumbhakar",
    description:
      "I'm a passionate full stack web developer skilled in Next.js, React, Node.js, and MongoDB, dedicated to building robust, scalable applications with seamless user experiences. I enjoy working across the stack—from crafting responsive, intuitive frontends to developing secure, efficient backends and managing databases. Always eager to learn and improve, I strive to turn complex problems into clean, maintainable solutions that delight users and drive real impact.",
    siteName: "Animesh Kumbhakar",
    images: [
      { url: "/profile.jpg", width: 1200, height: 630, alt: "Og Image" },
    ],
    type: "website",
  },
  twitter: {
    title: "Animesh Kumbhakar",
    description:
      "I'm a passionate full stack web developer skilled in Next.js, React, Node.js, and MongoDB, dedicated to building robust, scalable applications with seamless user experiences. I enjoy working across the stack—from crafting responsive, intuitive frontends to developing secure, efficient backends and managing databases. Always eager to learn and improve, I strive to turn complex problems into clean, maintainable solutions that delight users and drive real impact.",
    images: ["/profie.jpg"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
