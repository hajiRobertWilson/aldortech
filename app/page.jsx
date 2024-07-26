// ----------------------- Home Page ----------------------//
"use client"

import "./globals.css";
import "./global.queries.css";
import { useEffect } from "react";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main>
        {/* <h1>Home Page</h1> */}
        <HeroSection />
      </main>
    </>
  );
}
