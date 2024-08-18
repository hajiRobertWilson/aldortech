"use client"

import { useDataContext } from "@/app/context"
import Loading from "@/app/loading"
import Link from "next/link"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function DynamicRoute({ Id }) {
    // const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { setData } = useDataContext()
    const fetchData = () => {
        // setLoading(true)
        setData(Id)
        fetch('/api/clipBoard', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'id': '66b89aac7b1ffd2e989657ad', 'blogId': Id })
        }).then(response => response.json()).then(result => {
            if (result) {
                console.log('OK')
                // setLoading(false)
                router.push('/blogs/blogReader')
            } else {
                console.log('Not Ok')
            }

        }).catch(err => console.log(err))
    }
    // if (loading) {
    //     return <Loading />
    // }
    return (
        <>
            <button onClick={fetchData} type="button">Read More</button>
        </>
    )
}