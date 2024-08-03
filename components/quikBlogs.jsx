"use client"

import Link from "next/link"
import BlogCard from "./blogCard"

export default function QuikBlogs() {
    return (
        <>
            <div className="quikBlog">
                <h1>Blogs</h1>
                <div className="blogCardCont">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </>
    )
}