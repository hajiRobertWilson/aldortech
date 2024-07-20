// ----------------------- Home Page ----------------------//
"use client"

import "./globals.css";
import "./global.queries.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let btn = document.getElementById('themeBtn')
    const toggleTheme=() => {
      document.documentElement.classList.toggle('dark-theme')
    }

    btn.addEventListener('click',toggleTheme);

    return ()=>{
      btn.removeEventListener('click',toggleTheme)
    }
  }, [])

  return (
    <>
      <h1>Home Page</h1>
      <button id="themeBtn" type="button">change theme</button>
    </>
  );
}
