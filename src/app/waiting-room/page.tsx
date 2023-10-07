'use client'
import { useEffect, useState } from "react";

export default function NamePage()  {
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("hi")
        alert('hello world')
    },[])

    const handleNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    
    return (
        <div className="text-red-400">
        <button onClick={() => setName('Name')}>Click me</button>
        <h1>Name</h1>
        <input placeholder="input username" onChange={handleNameChange} /> 
        <p>jedi</p>
        </div>
    );
}