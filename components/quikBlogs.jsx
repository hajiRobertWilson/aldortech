"use client"

import { useEffect } from "react"
import { BlogCard } from "./Cards"

export default function QuikBlogs() {
    useEffect(async () => {
        const fetchData = await fetch('/api/blog', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        })
        const result = await fetchData.json();
        console.log(result)
    }, [])
    return (
        <>
            <div className="quikBlog">
                <h1>Blogs</h1>
                <div className="blogCardCont">
                    <BlogCard title={'first'} />
                    <BlogCard title={'second'} />
                    <BlogCard title={'third'} />
                    <BlogCard title={'fourth'} />
                </div>
            </div>
        </>
    )
}