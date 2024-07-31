// ------------- Contact Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Contact | Aldor Technologies',
  description: "Get in touch with Aldor Technologies for all your IT and digital marketing needs. Our Contact page provides all the details you need to reach out to our team, including our address, phone number, and contact form. We're here to help you with expert support and innovative solutions."
}

export default function Contact() {
  return (
    <>
      <main>
        <div>
          <div style={{ backgroundColor: 'red', width: '100%', height: '100vh' }}>
            <h1 style={{ fontSize: '5rem' }}>Contact Page</h1>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
