import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = localFont({
  src: [
    { path: "./fonts/Outfit-Thin.woff", weight: "100", style: "normal" },
    { path: "./fonts/Outfit-ExtraLight.woff", weight: "200", style: "normal" },
    { path: "./fonts/Outfit-Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/Outfit-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Outfit-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/Outfit-SemiBold.woff", weight: "600", style: "normal" },
    { path: "./fonts/Outfit-Bold.woff", weight: "700", style: "normal" },
    { path: "./fonts/Outfit-ExtraBold.woff", weight: "800", style: "normal" },
    { path: "./fonts/Outfit-Black.woff", weight: "900", style: "normal" },
  ],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "This is Jacob Men's Fellowship",
  description: "This is Jacob Men's Fellowship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
