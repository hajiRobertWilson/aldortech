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
                    <h2><Link href={'/'}>Home</Link> / <Link href={'/blogs'}>Blogs</Link> / {blog.title}</h2>
                    <ThemeBtn />
                </div>
                <div className="tocCont">
                    <div className="subCont">
                        <h2>Table Of Content</h2>
                        <h3>Main Heading</h3>
                        <ul>
                            <li id="subHeading"><a href="#">Sub Heading 1</a></li>
                            <li id="subHeading"><a href="#">Sub Heading 2</a></li>
                            <li id="subHeading"><a href="#">Sub Heading 3</a></li>
                            <li id="subHeading"><a href="#">Sub Heading 4</a></li>
                            <li id="subHeading"><a href="#">Sub Heading 5</a></li>
                            <li id="subHeading"><a href="#">Sub Heading 6</a></li>
                            <li id="subHeading"><a href="#">Sub Heading 7</a></li>
                            <li id="subHeading"><a href="#">Sub Heading 8</a></li>
                        </ul>
                    </div>
                </div>
                <div className="blogContent">
                    <article>
                        <section id="mainSection">
                            <h1>{blog.title} Lorem Ipsum Ahdygd ayegghg.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti maiores, perspiciatis inventore velit itaque recusandae voluptate soluta magnam aut, suscipit, animi ratione error sequi est veritatis nesciunt deserunt dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, accusantium suscipit. Suscipit animi quis iusto consectetur autem voluptate beatae. Ab accusantium magni amet magnam officia sunt consequuntur maiores placeat? Dolorum!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas dignissimos cumque veniam quod. Voluptates, possimus. Neque, recusandae maxime ducimus et consectetur repellat, quas iure voluptatem mollitia vero, veniam quibusdam sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos, dicta rerum qui, exercitationem nihil iste dolorum, odit placeat necessitatibus delectus amet ipsum! Delectus at deserunt maxime veniam nostrum optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi suscipit nam ratione modi debitis cupiditate incidunt obcaecati culpa, velit, cumque praesentium tenetur ullam dignissimos ad, veniam error! Temporibus, saepe perspiciatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae maiores est ipsum, ducimus dolores ut voluptatem culpa consectetur iure excepturi, eveniet ratione dolorem? In hic, beatae voluptas accusamus iure tenetur?</p>
                            <img src="/poster1.webp" alt="dlcfkdjk" />
                        </section>
                        <section id="subSection">
                            <h2>Sub Heading 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti maiores, perspiciatis inventore velit itaque recusandae voluptate soluta magnam aut, suscipit, animi ratione error sequi est veritatis nesciunt deserunt dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, accusantium suscipit. Suscipit animi quis iusto consectetur autem voluptate beatae. Ab accusantium magni amet magnam officia sunt consequuntur maiores placeat? Dolorum!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas dignissimos cumque veniam quod. Voluptates, possimus. Neque, recusandae maxime ducimus et conskkkkkkk,m,,,,,,,,ectetur repellat, quas iure voluptatem mollitia vero, veniam quibusdam sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos, dicta rerum qui, exercitationem nihil iste dolorum, odit placeat necessitatibus delectus amet ipsum! Delectus at deserunt maxime veniam nostrum optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi suscipit nam ratione modi debitis cupiditate incidunt obcaecati culpa, velit, cumque praesentium tenetur ullam dignissimos ad, veniam error! Temporibus, saepe perspiciatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae maiores est ipsum, ducimus dolores ut voluptatem culpa consectetur iure excepturi, eveniet ratione dolorem? In hic, beatae voluptas accusamus iure tenetur?</p>
                        </section>
                    </article>
                </div>
            </div>
        </>
    )
}