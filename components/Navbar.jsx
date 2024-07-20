"use client"
import Link from "next/link";

export default function Navbar() {

    const handleMenu=(element)=>{
        // console.log(element)
        element.classList.toggle('open')
    }

    return (
        <>
            <div className="navBar">
                <div className="logoContainer">
                    <Link href='/'><h1>Aldor Tech</h1></Link>
                </div>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/services'>Services</Link></li>
                    <li><Link href='/portfolio'>Portfolio</Link></li>
                    <li><Link href='/blogs'>Blogs</Link></li>
                    <li><Link href='/about'>About Us</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
                <div onClick={(e)=>handleMenu(e.currentTarget)} className="menuBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
}
