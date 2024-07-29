// ----------------------- Home Page ----------------------//
"use client"

import "./globals.css";
import "./global.queries.css";
import { useEffect } from "react";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";
import ServiceSlider from "@/components/services";
import Headings from "@/components/headings";
import QuikPort from "@/components/quikPortfolio";
import QuikBlogs from "@/components/quikBlogs";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <>
      <main>
        {/* <h1>Home Page</h1> */}
        <HeroSection />
        <ServiceSlider />
        <Headings />
        <QuikPort />
        <Reviews />
        <QuikBlogs />
        <Footer />
      </main>
    </>
  );
}
