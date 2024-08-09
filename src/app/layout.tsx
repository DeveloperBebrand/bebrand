"use client"

 
 import "./globals.css";
 
import AnimatedCursor from "react-animated-cursor";
 
import { useEffect, useState } from "react";
 
import {   Poppins } from "next/font/google";
import localFont from 'next/font/local'



 const myfont = localFont({
  src: '../../public/helvetica/Helvetica.ttf',
   
  display: 'swap',
})
// const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

 

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
      <body className={myfont.className}>
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
 

       
          <main>
            {children}
          </main>
      
      </body>
    </html>
  );
}