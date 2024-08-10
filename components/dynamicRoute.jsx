"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function DynamicRoute({Id}) {
    const [input, setInput] = useState('')
    const router = useRouter()
    const data = input
    const fetchData = async () => {
        let response = await fetch('/api/file', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'data': data })
        });
        let result = await response.json();
        console.log(result.response)
    }
    return (
        <>
            <button onClick={() => fetchData()} type="button">Read More</button>
        </>
    )
}