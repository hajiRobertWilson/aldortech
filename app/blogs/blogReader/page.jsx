"use client"
import { useDataContext } from "@/app/context"
import Loading from "@/app/loading";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import "./readerStyle.css";
import ThemeBtn from "@/components/themeBtn";

export default function BlogReader() {
    const router = useRouter()
    const [blog, setBlog] = useState('')
    const [loading, setLoading] = useState(true)
    const pathName = usePathname()
    const { data } = useDataContext()
    useEffect(() => {
        fetch('/api/blog/readBlog', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(result => {
            setBlog(result.data)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [pathName])
    useEffect(() => {
        document.title = blog.title ? blog.title : 'Blog Reader | Aldor Technologies'
    }, [blog])
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <div className="wrapContainer">
                <div className="toolBar">
                    <h2><Link style={{ color: 'blue', textDecoration: 'underline' }} href={'/'}>Home</Link> / <Link style={{ color: 'blue', textDecoration: 'underline' }} href={'/blogs'}>Blogs</Link> / {blog.title}</h2>
                    <ThemeBtn />
                </div>
                <div className="tocCont">
                    <ul>
                        <li id="mainHeading"><a href="#">Lorem Ipsum</a></li>
                        <li id="subHeading"><a href="#djksd">djksd</a></li>
                    </ul>
                </div>
                <div className="blogContent">
                    <article>
                        <h1>{blog.title}</h1>
                    </article>
                </div>
            </div>
        </>
    )
}