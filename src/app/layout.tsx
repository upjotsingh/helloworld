import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import StoreProvider from "@/providers/StoreProvider";
import { LanguageContextProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HelloWorld Solutions | Web & Mobile Apps",
  description:
    "HelloWorld Solutions builds websites and mobile apps for Android and iOS with modern design, animation, and data-driven storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <StoreProvider>
          <LanguageContextProvider>
            <ThemeContextProvider>
              <ThemeProvider>
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </ThemeProvider>
            </ThemeContextProvider>
          </LanguageContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
