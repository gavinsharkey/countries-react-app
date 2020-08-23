import React from "react"
import Country from "./Country"

const Countries = ({countries, handleCountrySelect}) => {
  return (
    <div className="countries">
      {countries.map((country) => (
        <Country
          key={country.alpha3Code}
          handleCountrySelect={handleCountrySelect}
          country={country}
        />
      ))}
    </div>
  )
}

export default Countries
