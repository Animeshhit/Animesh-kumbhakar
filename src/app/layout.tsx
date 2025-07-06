import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Your Site Title',
  description: 'Your site description, e.g. Full‑Stack Developer Portfolio.',
  authors: [{ name: 'Animesh Kumbhakar', url: 'https://linkedin.com/in/...'}],
  openGraph: {
    url: 'https://example.com',
    title: 'Your Site Title',
    description: 'Your site description.',
    siteName: 'Site Name',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Og Image' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Site Title',
    description: 'Your site description.',
    images: ['/og-image.png'],
  },
};




// export const metadata: Metadata = {
//   title: "Animesh Kumbhakar | Full Stack Web Developer ",
//   description:
//     "I'm a passionate full stack web developer skilled in Next.js, React, Node.js, and MongoDB, dedicated to building robust, scalable applications with seamless user experiences. I enjoy working across the stack—from crafting responsive, intuitive frontends to developing secure, efficient backends and managing databases. Always eager to learn and improve, I strive to turn complex problems into clean, maintainable solutions that delight users and drive real impact.",
// };

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
