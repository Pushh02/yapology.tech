import type { Metadata } from "next";
import { Press_Start_2P, Roboto } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "yapology.tech | BRAINROT ARTICLES FR FR 💀🔥",
  description: "The most chaotic brainrot articles platform in Ohio fr no cap 💀🔥",
  authors: [{ name: "SkibidiRizzlers" }],
  openGraph: {
    title: "yapology.tech | BRAINROT ARTICLES FR FR 💀🔥",
    description: "The most chaotic brainrot articles platform in Ohio fr no cap 💀🔥",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yapologytech",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
