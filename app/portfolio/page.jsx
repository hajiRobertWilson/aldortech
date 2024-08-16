// ------------- Portfolio Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/footer";
import PortComponent from "@/components/portfolio";
import Whatsapp from "@/components/whatsapp";

export const metadata = {
    title: 'Portfolio | Aldor Technologies',
    description: "Discover our portfolio at Aldor Technologies, showcasing successful projects and innovative solutions in web development, digital marketing, and IT services. See how we’ve helped businesses achieve their goals with our expert craftsmanship and cutting-edge technology."
}

export default function Portfolio() {
    return (
        <>
            <main >
                <div className="portPage">
                    <Whatsapp/>
                    <PortComponent />
                </div>
                <Footer />
            </main>
        </>
    );
}