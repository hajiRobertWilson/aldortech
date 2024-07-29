"use client"

export default function QuikBlogs() {
    return (
        <>
            <div className="quikPort">
                <h1>Blogs</h1>
                <div className="portCardCont">
                    <div className="portCard cardImg1">
                        <p className="title">Blogs</p>
                        <button title="Read" className="readmore">Read</button>
                    </div>
                    <div className="portCard cardImg2">
                        <p className="title">Blogs</p>
                        <button title="Read" className="readmore">Read</button>
                    </div>
                    <div className="portCard cardImg3">
                        <p className="title">Blogs</p>
                        <button title="Read" className="readmore">Read</button>
                    </div>
                    <div className="portCard redirectCard">
                        <h3>Click on Load more button to read our lates blogs!</h3>
                        <button type="button">Load More</button>
                    </div>
                </div>
            </div>
        </>
    )
}