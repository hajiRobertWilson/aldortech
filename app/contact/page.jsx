// ------------- Contact Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";
import Whatsapp from "@/components/whatsapp";

export const metadata = {
  title: 'Contact | Aldor Technologies',
  description: "Get in touch with Aldor Technologies for all your IT and digital marketing needs. Our Contact page provides all the details you need to reach out to our team, including our address, phone number, and contact form. We're here to help you with expert support and innovative solutions."
}

export default function Contact() {
  return (
    <>
      <main>
        <div className="contactPage">
          <Whatsapp/>
          <div className="heading">
            <h1>Contact us or ask your questions!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, est? Blanditiis voluptas exercitationem necessitatibus pariatur asperiores ex laborum, odio vel sapiente, voluptate praesentium laboriosam temporibus! Qui enim quod distinctio ad?</p>
          </div>
          <div className="mainCont">
            <div className="form">
              <ContactForm />
            </div>
            <div className="img">
              <img src="/contact2.png" alt="Contact" />
              {/* <img src="/contact.webp" alt="Contact" /> */}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
