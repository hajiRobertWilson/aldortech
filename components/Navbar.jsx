"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const links = ['Home', 'Services', 'Portfolio', 'Blogs', 'About Us', 'Contact'];
    const path = ['/', '/services', '/portfolio', '/blogs', '/about', '/contact'];
    const index = [0, 1, 2, 3, 4, 5];
    const [menuElement, setMenuElement] = useState();
    // const [navElements, setNavElements] = useState();
    // const [linkColor, setLinkColor] = useState();
    const [theme, setTheme] = useState('light')
    const [activeTab,setActiveTab]=useState('Home')

    const handleMenu = (elem) => {
        elem.classList.toggle('open')
        menuElement.classList.toggle('show')
    }
    // const handleMenuList=()=>{
    //     menuElement.classList.toggle('show')
    // }
    const handleTab = (ind) => {
        setActiveTab(links[ind])
        // navElements.forEach(element => {
            // element.style.color = (theme === 'light') ? 'black' : 'white';
            // if (element.dataset.value === links[ind]) {
            //     element.style.color = 'blue';
            //     console.log('Active Tab:',links[ind])
                // setActiveTab(links[ind])
            // }
        // });
    }



    useEffect(() => {
        const root = document.documentElement;
        // const styles = getComputedStyle(root);
        const navItem=document.querySelectorAll('.navLink')
        // setLinkColor(styles.getPropertyValue('--text-color').trim());
        // setNavElements(navItem)
        setMenuElement(document.querySelector('.menuLinks'))
        const navbar = document.querySelector('.navBar')
        const scrollFuntion = () => {
            if (document.body.scrollTop > 10 || root.scrollTop > 10) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky')
            }
        }
        window.onscroll = scrollFuntion
        const btn = document.getElementById('themeBtn')

        const toggleTheme = () => {
            root.classList.toggle('dark-theme');
            setTheme((theme === 'light') ? 'dark' : 'light')
        }
        btn.addEventListener('click', toggleTheme);
        navItem.forEach(ele => {
            ele.style.color = (theme === 'light') ? 'black' : 'white';
            if(ele.dataset.value===activeTab){
                ele.style.color='blue'
            }
        })
        return () => {
            window.onscroll = null;
            btn.removeEventListener('click', toggleTheme)
        }
    }, [theme,activeTab])

    return (
        <>
            <div className="navBar">
                <div className="navContainer">
                    <div className="logoContainer">
                        <Link href='/'><h1>Aldor Tech</h1></Link>
                    </div>
                    <ul>
                        {
                            index.map(i => <li className="navLink" key={i} data-value={links[i]} onClick={() => handleTab(i)}><Link href={path[i]}>{links[i]}</Link></li>)
                        }
                        <button id='themeBtn' type="button">Theme</button>
                    </ul>
                    <div onClick={(e) => handleMenu(e.currentTarget)} className="menuBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="menuLinks">
                    <ul>
                        {
                            index.map(i => <li key={i}><Link href={path[i]}>{links[i]}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}
