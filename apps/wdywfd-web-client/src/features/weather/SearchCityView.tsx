import React, { ChangeEvent, useState } from 'react'

function SearchCityView() {
 
  const [city, setCity] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  }

  return (
    <div>
      <h1>SearchCityView</h1>
      <input type="search" name="Search City View Input" id="search-city-view-input" onChange={handleChange} value={city} />
    </div>
  )
}

export default SearchCityView
