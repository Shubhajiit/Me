import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WindowEventProvider } from "@/contexts/window-event-provider";
import { ThemeProvider } from "@/components/theme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Shubhajit Basak",
    template: "%s | Shubhajit Basak",
  },
  description:
    "Full-stack developer specializing in React, Next.js, TypeScript, and Spring Boot.",
  keywords: [
    "Shubhajit Basak",
    "React",
    "Next.js",
    "Spring Boot",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Shubhajit Basak" }],
  openGraph: {
    title: "Shubhajit Basak",
    description:
      "Full-stack developer specializing in modern web applications.",
    url: "https://shubhajit.is-a.dev",
    siteName: "Shubhajit Basak",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Shubhajit Basak",
    description: "Full-stack developer portfolio",
    creator: "@shubhajit_basak",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <WindowEventProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </WindowEventProvider>
      </body>
    </html>
  );
}
