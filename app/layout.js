'use client'

import Navbar from "@/components/Navbar";
import "./globals.css";
import "./global.queries.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Provider } from "./context";
import { usePathname } from "next/navigation";
config.autoAddCss = false;


export default function RootLayout({ children }) {
  const pathName = usePathname()

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body style={{ background: '' }}>
        <Provider>
          {
            (pathName === '/blogs/blogReader') ? '' : <Navbar />
          }
          {children}
        </Provider>
      </body>
    </html>
  );
}

