export default function PortCard({ imgPath, dataValue, slector, title }) {
    return (
        <>
            <div data-value={dataValue} className={`portCard ${slector}`} style={{ backgroundImage: `url(/${imgPath})` }}>
                <p className="title">{title ? title : 'Portfolio'}</p>
                <button title="Live Demo" className="readmore">Live Demo</button>
            </div>
        </>
    )
}