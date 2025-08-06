import { outfitFontFamily } from "@/assets/fonts/outfit";
import RootProvidersLayout from "@/layouts/root-providers-layout";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestige - Fintech Platform",
  description: `Explore Prestige’s cutting-edge modular fintech platform designed to power smarter financial operations. Access secure data insights, seamless payments, regulatory compliance, and cash flow tools—built to accelerate your business success.`,
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      rel: "favicon.png",
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  openGraph: {
    title: "Prestige - Fintech Platform",
    description: ``,
    type: "website",
    images: [
      {
        url: "https://prestige.netlify.app/og-logo.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: `Explore Prestige’s cutting-edge modular fintech platform designed to power smarter financial operations. Access secure data insights, seamless payments, regulatory compliance, and cash flow tools—built to accelerate your business success.`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitFontFamily.className} subpixel-antialiased`}
        style={{ backgroundColor: "#010101" }}
      >
        <RootProvidersLayout>{children}</RootProvidersLayout>
      </body>
    </html>
  );
}
