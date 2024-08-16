"use client"
import { useDataContext } from "@/app/context"
import { IonIcon } from "@ionic/react";
import { chevronForward } from 'ionicons/icons'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

export default function BlogReader() {
    const [blog, setBlog] = useState('')
    const pathName = usePathname()
    const { data } = useDataContext()
    useEffect(() => {
        fetch('/api/blog/readBlog',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then(res => res.json()).then(result => {
            setBlog(result.data)
            console.log(result)
        }).catch(err => console.log(err))
    }, [pathName])
    useEffect(() => {
        document.title = blog.title ? blog.title : 'Blog Reader | Aldor Technologies'
    }, [blog])
    return (
        <>
            <h1 style={{ fontSize: '2.8rem' }}>Blog Reader: Blog {blog.id}</h1>
            <div style={{ backgroundColor: 'white', color: 'black', padding: '20px' }}>
                <h1>title:{blog.value}</h1>
                <h2><IonIcon icon={chevronForward} /> <Link style={{ color: 'blue' }} href={'/'}>Home</Link> / <Link style={{ color: 'blue' }} href={'/blogs'}>Blogs</Link> / {blog.title}</h2>
            </div>
        </>
    )
}