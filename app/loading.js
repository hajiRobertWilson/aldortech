import './loader.css';

export default function Loading() {
    return (
        <>

            <div className='loaderContainer'>
                <div className='temp'>
                    {/* <span className="loader"></span> */}
                    <h1 style={{ fontSize: '3rem', color: 'orange' ,margin:'auto'}}>Loading.......</h1>
                </div>
            </div>
        </>
    )
}