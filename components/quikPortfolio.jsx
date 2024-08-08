"use client"

import { PortCard } from "./Cards"


export default function QuikPort() {
    return (
        <>
            <div className="quikPort">
                <h1>Portfolio</h1>
                <div className="portCardCont">
                    <PortCard imgPath='poster1.webp' />
                    <PortCard imgPath='poster2.webp' />
                    <PortCard imgPath='poster3.webp' />
                    <PortCard imgPath='poster1.webp' />
                </div>
            </div>
        </>
    )
}