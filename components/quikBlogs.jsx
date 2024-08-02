"use client"

import Link from "next/link"

export default function QuikBlogs() {
    return (
        <>
            <div className="quikBlog">
                <h1>Blogs</h1>
                <div className="blogCardCont">
                    <div className="blogCard">
                        <div className="imgContainer">
                            <div className="img" style={{ backgroundImage: "url('/poster2.webp')" }}></div>
                        </div>
                        <h3>Heading text</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi dolores nobis explicabo tenetur sint tempora in</p>
                        <Link href='/'>Read More</Link>
                    </div>
                    <div className="blogCard">
                        <div className="imgContainer">
                            <div className="img" style={{ backgroundImage: "url('/poster3.webp')" }}></div>
                        </div>
                        <h3>Heading text</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi dolores nobis explicabo tenetur sint tempora in</p>
                        <Link href='/'>Read More</Link>
                    </div>
                    <div className="blogCard">
                        <div className="imgContainer">
                            <div className="img" style={{ backgroundImage: "url('/poster1.webp')" }}></div>
                        </div>
                        <h3>Heading text</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi dolores nobis explicabo tenetur sint tempora in</p>
                        <Link href='/'>Read More</Link>
                    </div>
                    <div className="blogCard">
                        <div className="imgContainer">
                            <div className="img" style={{ backgroundImage: "url('/poster2.webp')" }}></div>
                        </div>
                        <h3>Heading text</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi dolores nobis explicabo tenetur sint tempora in</p>
                        <Link href='/'>Read More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}