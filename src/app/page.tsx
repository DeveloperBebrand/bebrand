"use client";

import useImages from "../hooks/useImages";
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
   
    const LoadImages = () => {
      useImages();  
      setLoading(false);
    };

    LoadImages();
  }, [loading]);
  return (
    <>
      {loading ? (
        <Loading />  
      ) : (
        <ModalProvider>
          <Header />
          <SmoothScroll>
            <HomePage />
            <Footer />
          </SmoothScroll>
        </ModalProvider>
      )}
    </>
  );
}
