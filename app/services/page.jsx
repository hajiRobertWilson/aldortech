// ------------- Services Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/Footer";
import IndCard from "@/components/indCard";
import ServiceCard from "@/components/serviceCard";
import Link from "next/link";

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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet corrupti nisi. Eligendi repellendus voluptas rerum architecto. Recusandae adipisci maiores dolore pariatur beatae laudantium ullam! Ipsum fugiat obcaecati eos itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam minus, fugit vitae voluptas quos in inventore iste magni labore fuga id nesciunt magnam corporis reiciendis aliquam! Dolore, sunt ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur in exercitationem, ut quia id necessitatibus harum quaerat error a doloremque libero. Facilis at dicta, quidem exercitationem vel ipsa repellendus consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et architecto placeat labore blanditiis saepe cum exercitationem alias cumque corporis in quaerat aut minima delectus inventore, autem nostrum numquam velit! Nam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo explicabo earum fugit! Deserunt voluptatum, esse dolore iusto, laudantium corporis nemo perferendis non aperiam nihil, quaerat at ipsum corrupti distinctio. Voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere illo, minima impedit ducimus hic. Modi iste voluptatibus ratione reprehenderit itaque sapiente laborum cum ab adipisci optio ipsam, ea veritatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur veniam, soluta repellendus, voluptas, dignissimos odio perferendis iusto eum officia sed necessitatibus? Ratione minima unde aperiam est culpa dolore eius quasi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cum fugit suscipit et doloribus accusamus dolores veritatis in molestiae sit corrupti culpa placeat, temporibus magnam aliquam ab architecto neque enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam, earum animi repellendus assumenda, amet numquam enim voluptatibus laudantium expedita accusantium consequatur consectetur ut tempora sunt cumque esse, quae ex. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem architecto rerum iure saepe, consequuntur perferendis beatae odio! Temporibus sit atque beatae fugit, quisquam minus voluptatibus quaerat tempore in non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit tempore nulla quos delectus. Quas tenetur velit error aspernatur sequi. Corrupti delectus praesentium dolores enim sint laborum provident minima ex. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ea, rerum inventore quo laudantium itaque sapiente exercitationem beatae eligendi quam voluptas iusto voluptates magni! Voluptatum recusandae aspernatur at odio eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quia quibusdam nemo id illo, praesentium quos voluptatem est libero excepturi necessitatibus. Officiis ea magni vel tempora asperiores illum sapiente officia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem, voluptas, sapiente velit illum sed veritatis ullam iste qui aspernatur voluptatibus nulla ipsum, minima dolores praesentium maiores aut totam repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit consequuntur quo ipsum! Laborum facere impedit, ab amet vel, facilis enim laboriosam accusantium iusto aut autem porro magni asperiores atque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non ducimus quas dolor ad? Eveniet aperiam, pariatur repellendus cum vero harum? Similique delectus ut molestiae nam porro, voluptatem sapiente atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cum itaque aliquam quasi id in est quae ut, doloribus illo distinctio ex sequi quam! Facilis animi quibusdam saepe deleniti veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eius harum? Quasi, repudiandae? Facere ex, omnis expedita reiciendis fugit est rerum earum repellendus, provident doloribus assumenda modi? Fugit, corporis quis!</p>
                    </div>

                </div>
                <Footer />
            </main>
        </>
    );
}