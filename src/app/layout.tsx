"use client"

 
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layouts/Header";
import SmoothScroll from "../components/scroll/SmoothScroll";
import Footer from "../components/layouts/Footer";
import AnimatedCursor from "react-animated-cursor";
import { ModalProvider } from "@/components/context/ModalContext";
import { useEffect, useState } from "react";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the width as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the state based on the initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const metadata = {
    title: "BE Brand",
    description: "Word spread quickly, not through grandiose advertising but through the sincere, glowing recommendations of those the magic had touched.",
  };

  return (
    <html lang="en">
        <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        {!isSmallScreen && (
          <AnimatedCursor
            innerSize={20}
            outerSize={13}
            color="218,165,32" // لون ذهبي أغمق
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={8}
            innerStyle={{
               
              backgroundColor: " #c59c6e",
            }}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
        )}
        <SmoothScroll>
          <main>
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}