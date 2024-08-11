"use client"
// ------------- Blogs Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/footer";
import { BlogCard } from "@/components/Cards";
import { useEffect, useState } from "react";


export default function Blogs() {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('/api/blog').then(response => response.json()).then(result => {
            setData(result.data)
        }).catch(err => console.log(err))

    }, [])
    return (
        <>
            <main>
                <div className="blogPage">
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