'use client'

import tabHandler from "@/stateLib";
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
    const [tab, setTab] = useState('Home');
    const handleTab = () => {
        setTab('Contact')
        tabHandler.SetTab(tab)
        tabHandler.Temp
    }
    useEffect(() => {

        let element = document.getElementById("colorCont")
        const timeOut = setTimeout(() => {
            element.classList.add('colorCont')
        }, 500)
        return () => {
            clearTimeout(timeOut)
        }
    }, [tab])
    return (
        <>
            <div className="heroCont">
                <div className="leftContent">
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, itaque doloremque. Neque facilis laborum qui perferendis facere fugit, ab molestias odit illum nesciunt adipisci ut voluptatem impedit alias. Unde, harum.</h3>
                </div>
                <div className="rightContent">
                    <div className="btnCont">
                        <Link href='/' onClick={() => { handleTab() }}>Contact US</Link>
                        <Link href='/'>Make a qoute!</Link>
                    </div>
                </div>
                <div id="colorCont"></div>
            </div>
        </>
    )
}