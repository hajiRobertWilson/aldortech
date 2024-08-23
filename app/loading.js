"use client"
import { Audio, ThreeCircles } from 'react-loader-spinner';
import './loader.css';

export default function Loading() {
    return (
        <>

            <div className='loaderContainer'>
                <div className='temp'>
                    {/* <span className="loader"></span> */}
                    {/* <h1 style={{ fontSize: '3rem', color: '#1679AB', margin: 'auto' }}>Loading.......</h1> */}
                    <ThreeCircles
                        visible={true}
                        height="100"
                        width="100"
                        color="#1679AB"
                        ariaLabel="three-circles-loading"
                        wrapperStyle={{}}
                        wrapperClass="" />
                </div>
            </div>
        </>
    )
}