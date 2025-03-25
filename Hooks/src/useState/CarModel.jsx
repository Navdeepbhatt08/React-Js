import React, { useState } from 'react'

function CarModel() {
  const [car, setCar] = useState({
    car : 'Ferrari',
    model:'2021',
    engine:'E5'
  });
const changeCar=()=>{
        setCar((cart)=>{
             return{...cart,car:'Lambo ',model:'2033 ', engine :'ES5'}
        })
}


  return (
    <>
      <h1>My Favourite car is {car.car} , Model {car.model}, engine {car.engine} !!</h1>

      <div className='div1'>
    <button className='btn2' onClick={changeCar}>Change Car, Model, Engine</button></div>

    </>
  )
}

export default CarModel