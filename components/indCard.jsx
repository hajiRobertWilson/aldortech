export default function IndCard({imgPath,text}) {
    return (
        <>
            <div className="indCard">
                <img src={`/${imgPath}.png`} alt="Industry-Img" />
                <p>{text}</p>
            </div>
        </>
    )
}