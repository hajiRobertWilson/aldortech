"use client";


import { IonIcon } from "@ionic/react";
import { arrowUpCircleOutline, body, logoWhatsapp } from "ionicons/icons";
// import { usePathname } from "next/navigation";
// import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export default function Whatsapp() {
    // const path = usePathname();
    const handleWhats = () => {
        window.open('https://wa.me/+921234567899')
    }

    // const handleArrow = useCallback(() => {
    //     let btn = document.getElementById('arrowBtn');
    //     let scrollBody = document.querySelector('main')
    //     if (scrollBody && btn) {
    //         if (scrollBody.scrollTop > 350) {
    //             btn.style.display = 'block'
    //         } else if (scrollBody.scrollTop < 300) {
    //             btn.removeAttribute('style')
    //         }
    //     }
    // }, [])
    const returnToTop = () => {
        let scrollBody = document.querySelector('main')
        if (scrollBody) {
            scrollBody.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    // useLayoutEffect(() => {
    //     const scrollBody = document.querySelector('main')
    //     if (scrollBody) {
    //         scrollBody.addEventListener('scroll', handleArrow)
    //     }
    //     return () => {
    //         if (scrollBody) {
    //             scrollBody.removeEventListener('scroll', handleArrow)
    //         }
    //     }
    // }, [path,handleArrow])
    return (
        <>
            <div className="quikIconCont">
                <div onClick={() => handleWhats()} className="whatsCont">
                    <IonIcon className="whatsapp" icon={logoWhatsapp} />
                </div>
                <div id="arrowBtn" onClick={() => returnToTop()} className="upCont">
                    <IonIcon className="arrowUp" icon={arrowUpCircleOutline} />
                </div>
            </div>
        </>
    )
}