"use client"
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

export default function Loader() {
    const [loading, setLoading] = useState(false)
    // const router=useRouter();
    // const router=useRouter;
    const router=useRouter()
    useEffect(() => {
        const handleChangeStart = () => {
            setLoading(true);
        };
        const handleChangeComplete = () => {
            setLoading(false);
        }
        
        router.events.on('routeChangeStart', handleChangeStart);
        router.events.on('routeChangeComplete', handleChangeComplete);
        router.events.on('routeChangeError', handleChangeComplete);

        return () => {
            router.events.off('routeChangeStart', handleChangeStart);
            router.events.off('routeChangeComplete', handleChangeComplete);
            router.events.off('routeChangeError', handleChangeComplete);
        }

    }, [router])

    return (
        <>
            {loading}
            <p>loading....</p>
        </>
    )
}

// export function Loading(){
//     return(
//         <>
//         <p>loading.....!</p>
//         </>
//     )
// }