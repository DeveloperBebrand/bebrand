"use client";
 
 
 
import useImages from "../hooks/useImages";
 
import Link from "next/link";
import { ModalProvider } from "@/components/context/ModalContext";
 
import HomePage from "@/components/HomePage/HomePage";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
  
 
 
 
export default function Page() {
 
  return (
    <> 
  
 

        
  
      <ModalProvider>
     
        <Header/>
              
          <HomePage />
     
          
        <Footer />
      </ModalProvider>
         
        
       
        
       
     
        
      
    </>
  );
}
