"use client"

import { BlogCard } from "./Cards"

export default function QuikBlogs() {
    return (
        <>
            <div className="quikBlog">
                <h1>Blogs</h1>
                <div className="blogCardCont">
                    <BlogCard title={'first'} />
                    <BlogCard title={'second'} />
                    <BlogCard title={'third'}/>
                    <BlogCard title={'fourth'}/>
                </div>
            </div>
        </>
    )
}