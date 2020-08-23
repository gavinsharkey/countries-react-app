import React from "react"

const Country = ({country, handleCountrySelect}) => {
  return (
    <div onClick={() => handleCountrySelect(country)} className="country">
      <img src={country.flag} alt={country.name} />
      <p>{country.name}</p>
    </div>
  )
}

export default Country
