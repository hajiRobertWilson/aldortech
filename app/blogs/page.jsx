// ------------- Blogs Page -----------------//
import "../globals.css";
import "../global.queries.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import BlogCard from "@/components/blogCard";

export const metadata = {
    title: 'Blogs | Aldor Technologies',
    description: "Explore the Aldor Technologies blog for insightful articles, industry news, and expert opinions on web technologies, digital marketing, and IT solutions. Stay updated with our latest posts and trends to keep your business at the forefront of technology."
}

export default function Blogs() {
    return (
        <>
            <main>
                <div className="blogPage">
                    <div className="headingCont">
                        <h1>Our New Blogs</h1>
                        <h2>Latest New Blogs</h2>
                    </div>
                    <div className="globalBG blogsContainer">
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}