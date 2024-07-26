'use client'

import { useEffect } from "react"

export default function HeroSection() {
    useEffect(() => {
        let element = document.getElementById("colorCont")
        const timeOut = setTimeout(() => {
            element.classList.add('colorCont')
        }, 500)
        return () => {
            clearTimeout(timeOut)
        }
    }, [])
    return (
        <>
            <div className="heroCont">
                <div className="leftContent">
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, itaque doloremque. Neque facilis laborum qui perferendis facere fugit, ab molestias odit illum nesciunt adipisci ut voluptatem impedit alias. Unde, harum.</h3>
                </div>
                <div id="colorCont"></div>
            </div>
        </>
    )
}