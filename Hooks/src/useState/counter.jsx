import React, { useState } from 'react'

const Counter = () => {

const [count,setCount] = useState(0)

const increaseItem =()=>{
    setCount(count+1)
}

const decreaseItem =()=>{
    setCount(count-1)
}


  return (
    <div >
        <h1>Conuter : {count}</h1>
        <div className='div1'>
         <button onClick={increaseItem}>Increase</button>
         <button onClick={decreaseItem}>Decrease</button>
         </div>
    </div>
  )
}

export default Counter