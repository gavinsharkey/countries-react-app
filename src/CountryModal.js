import React from "react"

const CountryModal = ({country, closeModal}) => {
  return (
    <div className="country-modal">
      <div className="modal-header">
        <h3>{country.name}</h3>
        <div onClick={closeModal} className="close-button">
          <div>Close</div>
        </div>
      </div>
      <div className="modal-body">
        <h2>Region: {country.region}</h2>
        <h2>Sub-Region: {country.subregion}</h2>
        <h2>Population: {country.population}</h2>
        <h2>Capital: {country.capital}</h2>
        <p>Spoken Languages: </p>
        <ul>
          {country.languages.map((language, idx) => (
            <li key={idx}>{language.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CountryModal
