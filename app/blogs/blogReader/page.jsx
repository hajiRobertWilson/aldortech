"use client"
import { useDataContext } from "@/app/context"
import Loading from "@/app/loading";
import { IonIcon } from "@ionic/react";
import { chevronForward } from 'ionicons/icons'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react"

export default function BlogReader() {
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
            <Suspense fallback={<Loading />}>
                <h1 style={{ fontSize: '2.8rem' }}>Blog Reader: Blog {blog.id}</h1>
                <div style={{ backgroundColor: 'white', color: 'black', padding: '20px' }}>
                    <h1>title:{blog.value}</h1>
                    <h2><IonIcon icon={chevronForward} /> <Link style={{ color: 'blue' }} href={'/'}>Home</Link> / <Link style={{ color: 'blue' }} href={'/blogs'}>Blogs</Link> / {blog.title}</h2>
                </div>
            </Suspense>
        </>
    )
}