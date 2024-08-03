import Link from "next/link";

export default function BlogCard() {
    return (
        <>
            <div className="blogCard">
                <div className="imgContainer">
                    <div className="img" style={{ backgroundImage: "url('/poster2.webp')" }}></div>
                </div>
                <h3>Heading text</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi dolores nobis explicabo tenetur sint tempora in</p>
                <Link href='/'>Read More</Link>
            </div>
        </>
    )
}