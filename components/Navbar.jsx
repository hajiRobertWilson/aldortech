"use client"
import Link from "next/link";
import { usePathname} from "next/navigation";
import { useEffect, useState } from "react";
import ThemeBtn from "./themeBtn";
import { useDataContext } from "@/app/context";

export default function Navbar() {
    const { theme } = useDataContext()
    const links = ['Home', 'Services', 'Portfolio', 'Blogs', 'About Us', 'Contact'];
    const path = ['/', '/services', '/portfolio', '/blogs', '/about', '/contact'];
    const index = [0, 1, 2, 3, 4, 5];
    const [menuElement, setMenuElement] = useState();
    const [dropdownBtn, setDropdownBtn] = useState();
    const [windowWidth, setWindowWidth] = useState();
    const pathName = usePathname()


    const handleMenu = () => {
        dropdownBtn.classList.toggle('open')
        menuElement.classList.toggle('show')
    }
    const handleMenuList = () => {
        if (dropdownBtn) {
            dropdownBtn.classList.toggle('open')
        }
        menuElement.classList.toggle('show')
    }


    useEffect(() => {
        setDropdownBtn(document.getElementById('barBtn'));

        // ---Tab Handler and active tab functionallity---//
        const root = document.documentElement;
        let activeTab = pathName;
        const navItem = document.querySelectorAll('.navLink')
        const menulinks = document.querySelector('.menuLinks')
        setMenuElement(menulinks)
        navItem.forEach(ele => {
            ele.style.color = (theme === 'light') ? 'black' : 'white';
            ele.style.fontWeight = 'normal'
            if (ele.dataset.value === activeTab) {
                ele.style.color = '#1679AB'
                ele.style.fontWeight = 'bold'
            }
        })

        //----Navbar, Buttons, Links, Scroll and related functionallity----//
        const navbar = document.querySelector('.navBar')
        const scrollFuntion = () => {
            if (document.body.scrollTop > 10 || root.scrollTop > 10) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky')
            }
        }
        window.onscroll = scrollFuntion;

        //---- Small Navbar responsiveness handler----//
        const handleWindow = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWindow);
        if (windowWidth >= 1000 && dropdownBtn && dropdownBtn.classList.contains('open')) {
            dropdownBtn.classList.remove('open')
            menuElement.classList.remove('show')
        }

        return () => {
            window.onscroll = null;
            window.removeEventListener("resize", handleWindow)
        }
    }, [theme, pathName, windowWidth])

    return (
        <>
            <div className="toolBarCont">
                <ThemeBtn />
            </div>
            <div className="navBar">
                <div className="navContainer">
                    <div className="logoContainer">
                        <Link href='/'><h1>Aldor Tech</h1></Link>
                    </div>
                    <ul>
                        {
                            index.map(i => <Link href={path[i]} className="navLink" key={i} data-value={path[i]} ><li >{links[i]}</li></Link>)
                        }
                    </ul>
                    <div id="barBtn" onClick={() => handleMenu()} className="menuBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="menuLinks">
                    <ul>
                        {
                            index.map(i => <Link key={i} href={path[i]}><li className="navLink" data-value={path[i]} onClick={() => {
                                handleMenuList();
                            }}>{links[i]}</li></Link>)
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}
// export function TabState(){}
