"use client"

export default function QuikPort() {
    return (
        <>
            <div className="quikPort">
                <h1>Portfolio</h1>
                <div className="portCardCont">
                    <div className="portCard cardImg1">
                        <p className="title">Portfolio</p>
                        <button title="Live Demo" className="readmore">Live Demo</button>
                    </div>
                    <div className="portCard cardImg2">
                        <p className="title">Portfolio</p>
                        <button title="Live Demo" className="readmore">Live Demo</button>
                    </div>
                    <div className="portCard cardImg3">
                        <p className="title">Portfolio</p>
                        <button title="Live Demo" className="readmore">Live Demo</button>
                    </div>
                    <div className="portCard redirectCard">
                        <h3>Click on Load more button to see our more projects!</h3>
                        <button type="button">Load More</button>
                    </div>
                </div>
            </div>
        </>
    )
}