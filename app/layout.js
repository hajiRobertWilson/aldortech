import Navbar from "@/components/Navbar";
import "./globals.css";
import "./global.queries.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Whatsapp from "@/components/whatsapp";
config.autoAddCss = false;

export const metadata = {
  title: "Home | Aldor Technologies",
  description: "Welcome to Aldor Technologies - your go-to destination for expert web development, web hosting, and web design. Our comprehensive solutions include SEO services, blog writing, and content creation to enhance your online presence. Explore our innovative portfolios and contact options to discover how Aldor Technologies can elevate your web and digital marketing strategies.",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>
        <Whatsapp />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

