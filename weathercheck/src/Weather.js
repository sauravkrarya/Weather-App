import React,{useState} from 'react'

export default function Weather() {
  const[city, setCity]=useState();
  const handleCityChange =(event) => {
    setCity(event.target.value)
  }
  return (
    
    <div className='weather-container'>
      <input type='text' placeholder='Enter the City Name' value={city} onChange={handleCityChange} />
    </div>
  )
}
