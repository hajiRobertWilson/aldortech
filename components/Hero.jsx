'use client'
// import { useDataContext } from "@/app/context"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
    // useEffect(() => {

    //     let element = document.getElementById("colorCont")
    //     const timeOut = setTimeout(() => {
    //         element.classList.add('colorCont')
    //     }, 500)
    //     return () => {
    //         clearTimeout(timeOut)
    //     }
    // }, [tab])
    // const { data } = useDataContext()
    // useEffect(() => {
    //     console.log(data)
    // }, [data])
    return (
        <>
            <div className="heroCont">
                <div className="leftContent">
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, itaque doloremque. Neque facilis laborum qui perferendis facere fugit, ab molestias odit illum nesciunt adipisci ut voluptatem impedit alias. Unde, harum.</h3>
                </div>
                <div className="rightContent">
                    <div className="btnCont">
                        <Link href='/contact'>Contact US</Link>
                        <Link href='/'>Make a qoute!</Link>
                    </div>
                </div>
                <div id="colorCont" className="colorCont"></div>
            </div>
        </>
    )
}