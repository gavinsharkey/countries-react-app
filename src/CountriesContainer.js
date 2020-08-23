import React, {useState, useEffect} from "react"
import Countries from "./Countries"
import CountriesRegionFilter from "./CountriesRegionFilter"
import CountryModal from "./CountryModal"

const CountriesContainer = () => {
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState("all")
  const [query, setQuery] = useState("")
  const [currentCountry, setCurrentCountry] = useState({})
  const [showModal, setShowModal] = useState(false)

  const fetchCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((resp) => resp.json())
      .then((json) => setCountries(json))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const renderCountries = () => {
    const searchedCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(query)
    )

    if (region === "all") {
      return searchedCountries
    } else {
      return searchedCountries.filter(
        (country) =>
          country.region === region &&
          country.name.toLowerCase().includes(query)
      )
    }
  }

  const handleCountrySelect = (country) => {
    setCurrentCountry(country)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="countries-container">
        <CountriesRegionFilter
          region={region}
          setRegion={setRegion}
          query={query}
          setQuery={setQuery}
        />
        <Countries
          handleCountrySelect={handleCountrySelect}
          countries={renderCountries()}
        />
      </div>
      {showModal ? (
        <CountryModal closeModal={closeModal} country={currentCountry} />
      ) : null}
    </>
  )
}

export default CountriesContainer
