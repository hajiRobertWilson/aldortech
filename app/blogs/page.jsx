// ------------- Blogs Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/Footer";

export const metadata = {
    title: 'Blogs | Aldor Technologies',
    description: "Explore the Aldor Technologies blog for insightful articles, industry news, and expert opinions on web technologies, digital marketing, and IT solutions. Stay updated with our latest posts and trends to keep your business at the forefront of technology."
}

export default function Blogs() {
    return (
        <>
            <main>
                <div>
                    <div style={{ backgroundColor: 'red', width: '100%', height: '100vh' }}>
                        <h1 style={{fontSize:'5rem'}}>Blogs Page</h1>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}