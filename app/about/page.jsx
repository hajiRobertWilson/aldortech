// ------------- About Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/Footer";

export const metadata = {
    title: 'About Us | Aldor Technologies',
    description: "Learn more about Aldor Technologies, a leader in IT solutions and digital marketing. Our About page provides insights into our mission, vision, and the team behind our cutting-edge services. Discover our commitment to delivering exceptional solutions and driving success for our clients."
}

export default function About() {
    return (
        <>
            <main>
                <div>
                    <div style={{ backgroundColor: 'red', width: '100%', height: '100vh' }}>
                        <h1 style={{fontSize:'5rem'}}>About Page</h1>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}