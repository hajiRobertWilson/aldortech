// ----------------------- Home Page ----------------------//
"use client"

import "./globals.css";
import "./global.queries.css";
import { useEffect } from "react";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        {/* <h1>Home Page</h1> */}
        <HeroSection />
        <div style={{ height: '1000px', width: '100%' }}></div>
        <Footer />
      </main>
    </>
  );
}
