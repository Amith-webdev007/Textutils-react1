import React, { useState } from 'react'

export default function Num() {
    const [count , setcount] = useState(0)

    const handleupclick = ()=>{
      setcount(count + 1)
    }

    const handledownclick = ()=>{
      setcount(count - 1)
    }
  return (

    <>
      <div className='container'>

        <button onClick={handleupclick}>+</button>
        <h1>{count}</h1>
        <button onClick={handledownclick}>-</button>

        
    </div>
    </>
  )
}
