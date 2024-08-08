"use client";
 
 
 
import useImages from "../hooks/useImages";
 
import Link from "next/link";
import { ModalProvider } from "@/components/context/ModalContext";
 
import HomePage from "@/components/HomePage/HomePage";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useEffect, useState } from "react";
import Loading from "@/components/loading/Loading";
  
 
 
 
export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading
    const loadImages =   () => {
       useImages(); // Assuming useImages is a function that loads images
      setLoading(false);
    };

    loadImages();
  }, [loading]);
  return (
    <> 
  
 

        
  {loading     ? (
        <Loading/> // Display loading indicator
      ) : (
          <ModalProvider>  
          <Header />
          <SmoothScroll>
          <HomePage />
            </SmoothScroll>
          <Footer />
        </ModalProvider>
      )}
         
        
       
        
       
     
        
      
    </>
  );
}
