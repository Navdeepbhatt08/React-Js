import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)



  useEffect(()=>{
    setTimeout(()=>{
      setCount(count => count+1)
    },2000)
  },[])

  return (
    <>
      <h1>I've Rendered {count} Times !</h1>
    </>
  )
}

export default UseEffect