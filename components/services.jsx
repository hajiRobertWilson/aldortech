"use client"

import Image from "next/image";

export default function ServiceSlider() {
    const services = [
        'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React-JS', 'NEXT-JS', 'JQuery',
        'Web Designing', 'Web Development', 'SEO', 'E-Commerce', 'SPAs',
        'Inventory Applications', 'Web Hosting', 'Web Deployment', 'WordPress',
        'Woo-Commerce', 'Blogs Writing', 'Content Writing', 'Data Entry',
        'Tailwind-CSS', 'MS-Excel', 'MS-Word', 'Data-Entry', 'Email Scraping'
    ];
    return (
        <>
            <div className='postCont1'>
                <div className='slideContent'>
                    {services.map(service => (
                        <div key={service} className='slideServices'>{service}</div>
                    ))}
                </div>
                <div className="brand">
                    <h1>Aldor Technologies & Soft Solutions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="posterCont">
                    <div className="postText">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum magnam quos dolorem animi! Dolorum dicta repellendus nesciunt quasi numquam non, culpa pariatur laboriosam molestias odio omnis quo tenetur similique fuga.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iure, nemo, eos voluptatem accusantium voluptates minima earum nobis possimus expedita eaque veniam ut velit facilis aliquid eveniet! Alias, sunt cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem explicabo deserunt consectetur, non recusandae unde iste id sequi similique quaerat quo aut iusto ab saepe nisi? Tenetur saepe et soluta!
                    </div>
                    <div className="postImg">
                        <Image src="/poster1.jpg" alt="Poster 1" width={500} height={500} />
                    </div>
                </div>
            </div>

            <div className='postCont2'>
                <div className="brand">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="posterCont">
                    <div className="postText">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum magnam quos dolorem animi! Dolorum dicta repellendus nesciunt quasi numquam non, culpa pariatur laboriosam molestias odio omnis quo tenetur similique fuga.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iure, nemo, eos voluptatem accusantium voluptates minima earum nobis possimus expedita eaque veniam ut velit facilis aliquid eveniet! Alias, sunt cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem explicabo deserunt consectetur, non recusandae unde iste id sequi similique quaerat quo aut iusto ab saepe nisi? Tenetur saepe et soluta!
                    </div>
                    <div className="postImg">
                        <Image src="/poster2.webp" alt="Poster 1" width={500} height={500} />
                    </div>
                </div>
            </div>
        </>
    );
}
