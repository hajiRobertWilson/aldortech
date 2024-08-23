"use client"
// ------------- Blogs Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/footer";
import { BlogCard } from "@/components/Cards";
import { useEffect, useState } from "react";
import { useDataContext } from "../context";
import Whatsapp from "@/components/whatsapp";
import Loading from "../loading";


export default function Blogs() {
    const [loading, setLoading] = useState(true)
    const { position, setPosition } = useDataContext()
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('/api/blog').then(response => response.json()).then(result => {
            setData(result.data)
            setLoading(false)
            document.querySelector('main').scrollTo({ top: position, behavior: 'smooth' })
        }).catch(err => console.log(err))

    }, [])
    useEffect(() => {
        const main = document.querySelector('main')
        const handleScroll = () => {
            let scrollPosition = document.querySelector('main').scrollTop
            setPosition(scrollPosition)
        }
        if (main) {
            main.addEventListener('scroll', handleScroll)
        }
        return () => {
            if (main) {
                main.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])
    if (loading) return <Loading />
    return (
        <>
            <main>
                <div className="blogPage">
                    <Whatsapp />
                    <div className="headingCont">
                        <h1>Our New Blogs</h1>
                        <h2>Latest New Blogs</h2>
                    </div>
                    <div className="globalBG blogsContainer">
                        {
                            data.map(data => <BlogCard imgPath={data.path} id={data.id} title={data.title} key={data.id} />)
                        }
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}