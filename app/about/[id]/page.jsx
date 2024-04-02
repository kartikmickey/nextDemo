'use client'
import React, { useEffect, useState } from 'react'

function page({params}) {

  // let router = useRouter();
  const [obj, setObj] = useState({})

  useEffect(()=>{
    async function data(){
      let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
      let d = await res.json();
      setObj(d)
      console.log(obj);
    }
    data();
  },[])
 
  
  console.log(params.id)

  return (
    // <div>{
    //   obj?.map((e,i)=><div key={i} >{e.title}</div>)
    //   }</div>
    <div>{obj?.title}</div>
  )
}

export default page