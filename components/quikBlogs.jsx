"use client"

import { useEffect, useState } from "react"
import { BlogCard } from "./Cards"

export default function QuikBlogs() {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('/api/blog').then(response => response.json()).then(result => {
            let limit = result.data.length
            setData(result.data.slice(limit - 4, limit).reverse())
        }).catch(err => console.log(err))

    }, [])
    return (
        <>
            <div className="quikBlog">
                <h1>Blogs</h1>
                <div className="blogCardCont">
                    {
                        data.map(data => <BlogCard imgPath={data.path} id={data.id} title={data.title} key={data.id} />)
                    }
                </div>
            </div>
        </>
    )
}