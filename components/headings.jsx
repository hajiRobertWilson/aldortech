"use client"

export default function Headings() {
    let cards = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <div className="headingCont">
                <div className="boldtextCont">
                    <h1>Bold Text Here.</h1>
                    <div className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolores quasi magni delectus voluptate facilis dicta. Libero dolorem necessitatibus molestias voluptatum odio, esse corporis itaque expedita possimus. Tempore, vero vitae?</div>
                </div>
                <div className="cardsCont">
                    {
                        cards.map(card => <div key={card} className="cards">card</div>)
                    }
                </div>
                <div className="logoCont">
                    <img src="/poster4.webp" alt="Poster3" />
                </div>
            </div>
        </>
    )
}