"use client"
import DynamicRoute from "./dynamicRoute";

export function BlogCard({ title, id, imgPath }) {

    return (
        <>
            <div className="blogCard">
                <div className="imgContainer">
                    <div className="img" style={{ backgroundImage: `url('/${imgPath}')` }}></div>
                </div>
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi dolores nobis explicabo tenetur sint tempora in</p>
                <DynamicRoute Id={id} />
            </div>
        </>
    )
}
export function IndCard({ imgPath, text }) {
    return (
        <>
            <div className="indCard">
                <img src={`/${imgPath}.png`} alt="Industry-Img" />
                <p>{text}</p>
            </div>
        </>
    )
}
export function PortCard({ imgPath, dataValue, slector, title }) {
    return (
        <>
            <div data-value={dataValue} className={`portCard ${slector}`} style={{ backgroundImage: `url(/${imgPath})` }}>
                <p className="title">{title ? title : 'Portfolio'}</p>
                <button title="Live Demo" className="readmore">Live Demo</button>
            </div>
        </>
    )
}
export function ServiceCard() {
    return (
        <>
            <div className="serviceCard">
                <img src="/poster3.webp" alt="Poster" />
                <h2>heading text</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestiae optio fugit voluptates doloribus quaerat veritatis perferendis quos excepturi voluptatum magni, quibusdam, numquam unde enim quisquam quia vero eius omnis!</p>
            </div>
        </>
    )
}