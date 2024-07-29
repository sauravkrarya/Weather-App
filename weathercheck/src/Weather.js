import React from 'react'

export default function Weather() {
  const[city, setCity]=useState();
  return (
    
    <div classname='weather-container'>
      <input type='text' placeholder='Enter the City Name' value={city} onChange={handleCityChange} />
    </div>
  )
}
