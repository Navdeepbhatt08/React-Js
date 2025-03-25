import React, { useState } from 'react'


const SecondEffect = () => {
const [count,setCount]= useState('red')
const increase=()=>{
       setCount ('blue')
}
  return (
    <div>
         <h1>This is a Color {count}</h1>
         <button onClick={increase}>Change</button>
    </div>
  )
}

export default SecondEffect