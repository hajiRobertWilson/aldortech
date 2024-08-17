"use client"
import { useDataContext } from "@/app/context";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function ThemeBtn() {
    const { theme, setTheme } = useDataContext()

    useEffect(() => {
        
        // ----Theme Changing and Theme Button Handler----//
        const root = document.documentElement;
        const themebtn = document.getElementById('themeBtnCont');
        let inner = document.getElementById('inner');
        const toggler = () => {
            inner.classList.toggle('slide')
            root.classList.toggle('dark-theme');
            setTheme((theme === 'light') ? 'dark' : 'light')

        }
        themebtn.addEventListener('click', toggler);


        return () => {
            themebtn.removeEventListener('click', toggler);
        }
    }, [theme])
    return (
        <>
            <div id="themeBtnCont" className="themeBtnCont">
                <div id="inner" className="inner"><FontAwesomeIcon icon={(theme === 'light') ? faMoon : faSun} /></div>
            </div>
        </>
    )
}