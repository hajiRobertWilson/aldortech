"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [menuElement, setMenuElement] = useState()

    const handleMenu = (elem) => {
        elem.classList.toggle('open')
        menuElement.classList.toggle('show')
    }


    useEffect(() => {
        let menuLinks = document.querySelector('.menuLinks')
        setMenuElement(menuLinks)
        let navbar = document.querySelector('.navBar')
        const scrollFuntion = () => {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky')
            }
        }
        window.onscroll = scrollFuntion
        return () => {
            window.onscroll = null;
        }
    }, [])

    return (
        <>
            <div className="navBar">
                <div className="navContainer">
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
                    <div onClick={(e) => handleMenu(e.currentTarget)} className="menuBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="menuLinks">
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/services'>Services</Link></li>
                        <li><Link href='/portfolio'>Portfolio</Link></li>
                        <li><Link href='/blogs'>Blogs</Link></li>
                        <li><Link href='/about'>About Us</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
