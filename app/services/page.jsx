// ------------- Services Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/Footer";

export const metadata = {
    title: 'Services | Aldor Technologies',
    description: "Learn about the comprehensive services offered by Aldor Technologies, including web development, digital marketing, IT consulting, and more. Find out how our tailored solutions can address your business needs and drive success in today’s digital landscape."
}

export default function Services() {
    return (
        <>
            <main>
                <div>
                    <div style={{ backgroundColor: 'red', width: '100%', height: '100vh' }}>
                        <h1 style={{fontSize:'5rem'}}>Services Page</h1>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}