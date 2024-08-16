// ------------- About Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";

export const metadata = {
    title: 'About Us | Aldor Technologies',
    description: "Learn more about Aldor Technologies, a leader in IT solutions and digital marketing. Our About page provides insights into our mission, vision, and the team behind our cutting-edge services. Discover our commitment to delivering exceptional solutions and driving success for our clients."
}

export default function About() {
    return (
        <>
            <main>
                <div className="aboutPage">
                    <Whatsapp/>
                    <div className="firstCont">
                        <h1>About Us</h1>
                        <div className="postCont">
                            <div className="text">
                                <h2>Our Mission</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam aperiam qui tempore minima corrupti corporis possimus delectus temporibus laudantium tenetur ex, nostrum ipsam deserunt aliquam aspernatur eligendi harum earum?</p>
                                <h2>Heading Text!</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum esse, ipsam voluptas obcaecati impedit soluta vel eos tenetur alias dicta amet nesciunt suscipit possimus, maiores quisquam! Vero earum maxime ea!</p>
                            </div>
                            <div className="img">
                                <img src="/AboutUs1.webp" alt="AboutUS1" />
                            </div>
                        </div>
                        <div className="subCont">
                            <h3>Sub headung</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi maiores aliquid atque minus, accusamus dolor illum aspernatur veritatis. Et minus ullam natus ex sed nemo fuga reiciendis esse voluptas?</p>
                            <h3>Sub Heading</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quos quia inventore molestias nobis vero sed temporibus, officiis libero cumque, deserunt ea laborum maxime quo repudiandae dignissimos. Molestias, aliquid quis.</p>
                        </div>
                    </div>

                    <div className="secondCont globalBG">
                        <h3>DISTINCTIONS THAT DEFINE US</h3>
                        <ul>
                            <li>Distributed Approach</li>
                            <li>Standardized Excellence</li>
                            <li>Privacy Pioneers</li>
                            <li>Auditability Architects</li>
                            <li>Security Stalwarts</li>
                            <li>Global Client Satisfaction</li>
                            <li>Adept IT Professionals</li>
                            <li>Unwavering Quality</li>
                            <li>24/7 Customer Support</li>
                            <li>Punctual Deliveries</li>
                            <li>Agile Methodology Advocates</li>
                            <li>Customer Devotion</li>
                            <li>Adaptive Flexibility</li>
                            <li>Catalysts for Business Growth</li>
                        </ul>
                        <div  className="postCont">
                            <div className="text">
                                <h2 style={{ color: '#1679AB' }}>DIGITAL EVOLUTION WITH ALDOR TECHNOLOGIES</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam aperiam qui tempore minima corrupti corporis possimus delectus temporibus laudantium tenetur ex, nostrum ipsam deserunt aliquam aspernatur eligendi harum earum?</p>
                                <h2 style={{ color: '#1679AB' }}>Heading Text!</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum esse, ipsam voluptas obcaecati impedit soluta vel eos tenetur alias dicta amet nesciunt suscipit possimus, maiores quisquam! Vero earum maxime ea!</p>
                            </div>
                            <div className="img">
                                <img src="/AboutUs2.webp" alt="AboutUS1" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}