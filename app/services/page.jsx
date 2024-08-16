// ------------- Services Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/footer";
import Link from "next/link";
import { IndCard, ServiceCard } from "@/components/Cards";
import Whatsapp from "@/components/whatsapp";

export const metadata = {
    title: 'Services | Aldor Technologies',
    description: "Learn about the comprehensive services offered by Aldor Technologies, including web development, digital marketing, IT consulting, and more. Find out how our tailored solutions can address your business needs and drive success in today’s digital landscape."
}

export default function Services() {
    const imgPath = ['ind1', 'ind2', 'ind3', 'ind4', 'ind5', 'ind6', 'ind7', 'ind8'];
    return (
        <>
            <main>
                <div className="servicePage">
                    <Whatsapp />
                    <div className="posterCont">
                        <div className="imgCont">
                            <div className="img">
                                <img src="/Development.webp" alt="Laptop" />
                            </div>
                        </div>
                        <div className="text">
                            <h1>Heading Text</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, excepturi. Ipsam cumque asperiores voluptas ipsum harum inventore nostrum, sapiente dolorum? Ratione culpa rerum nesciunt id, aspernatur mollitia perspiciatis cum magnam.</p>
                        </div>
                    </div>

                    <div className="globalBG promise">
                        <h2>OUR DEVELOPMENT COMPANY’S EXCELLENCE</h2>
                        <p><Link style={{ color: '#1679AB', fontWeight: 'bold' }} href='/'>Aldor Technologies</Link> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam, animi tempore in voluptatem architecto iste tenetur voluptatibus.</p>
                    </div>

                    <div className="globalBG industryCont">
                        <h2>INDUSTRIES WE SERVE</h2>
                        <h3>Our industry wise solution include</h3>
                        <div className="indCardCont">
                            {
                                imgPath.map(path => <IndCard key={path} imgPath={path} text='lorem ipsum' />)
                            }

                        </div>
                    </div>

                    <div className="globalBG serviceCont">
                        <h1>SERVICES We Offer</h1>
                        <div className="serviceCardCont">
                            <ServiceCard />
                            <ServiceCard />
                            <ServiceCard />
                        </div>
                        <div className="btnCont">
                            <Link href='/services'>Talk With Our Experts</Link>
                        </div>
                    </div>

                    <div className="globalBG whyUsCont">
                        <h1>Why Choose Aldor Technologies?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet corrupti nisi. Eligendi repellendus voluptas rerum architecto. Recusandae adipisci maiores dolore pariatur beatae laudantium ullam! Ipsum fugiat obcaecati eos itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam minus, fugit vitae voluptas quos in inventore iste magni labore fuga id nesciunt magnam corporis reiciendis aliquam! Dolore, sunt ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur in exercitationem, ut quia id necessitatibus </p>
                    </div>

                </div>
                <Footer />
            </main>
        </>
    );
}