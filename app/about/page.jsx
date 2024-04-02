'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export default function About() {

    const [data , setData] = useState([]);
    useEffect(()=>{
        async function todos (){
            let res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
            let d = await res.json();
            setData(d);
        }
        todos();
    },[])
    console.log(data);

  return (
    <div>
        {
            data?.map((e,i)=>
                    <div key={i}>
                      <Link href={`/about/${e.id}`} >
                      {i+1}.  {e.title}
                    </Link>
                      </div>
                )
        }
    </div>
  )
}
