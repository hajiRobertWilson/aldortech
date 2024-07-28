"use client"
import tabHandler from "@/stateLib";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const links = ['Home', 'Services', 'Portfolio', 'Blogs', 'About Us', 'Contact'];
    const path = ['/', '/services', '/portfolio', '/blogs', '/about', '/contact'];
    const index = [0, 1, 2, 3, 4, 5];
    const [menuElement, setMenuElement] = useState();
    const [theme, setTheme] = useState('light')
    const [activeTab, setActiveTab] = useState('Home')
    const [dropdownBtn, setDropdownBtn] = useState();
    const [windowWidth, setWindowWidth] = useState();

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
    const handleTab = (ind) => {
        setActiveTab(links[ind])
    }


    useEffect(() => {
        setDropdownBtn(document.getElementById('barBtn'));
        // setActiveTab((tabHandler.Tab !== 'Home') ? tabHandler.Tab : 'Home')
        // tabHandler.Temp(setActiveTab)


        // ---Tab Handler and active tab functionallity---//
        const root = document.documentElement;
        const navItem = document.querySelectorAll('.navLink')
        const menulinks = document.querySelector('.menuLinks')
        setMenuElement(menulinks)
        navItem.forEach(ele => {
            ele.style.color = (theme === 'light') ? 'black' : 'white';
            if (ele.dataset.value === activeTab) {
                ele.style.color = 'blue'
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

        // ----Theme Changing and Theme Button Handler----//
        const themebtn = document.getElementById('themeBtnCont');
        let inner = document.getElementById('inner');
        const toggler = () => {
            inner.classList.toggle('slide')
            root.classList.toggle('dark-theme');
            setTheme((theme === 'light') ? 'dark' : 'light')

        }
        themebtn.addEventListener('click', toggler);


        return () => {
            window.onscroll = null;
            window.removeEventListener("resize", handleWindow)
            themebtn.removeEventListener('click', toggler);
        }
    }, [theme, activeTab, windowWidth])

    return (
        <>
            <div className="toolBarCont">
                <div id="themeBtnCont" className="themeBtnCont">
                    <div id="inner" className="inner"><FontAwesomeIcon icon={(theme === 'light') ? faMoon : faSun} /></div>
                </div>
            </div>
            <div className="navBar">
                <div className="navContainer">
                    <div className="logoContainer">
                        <Link href='/'><h1>Aldor Tech</h1></Link>
                    </div>
                    <ul>
                        {
                            index.map(i => <li className="navLink" key={i} data-value={links[i]} onClick={() => handleTab(i)}><Link href={path[i]}>{links[i]}</Link></li>)
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
                            index.map(i => <Link key={i} href={path[i]}><li className="navLink" data-value={links[i]} onClick={() => {
                                handleTab(i);
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
