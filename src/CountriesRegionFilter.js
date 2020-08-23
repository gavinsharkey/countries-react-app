import React from "react"

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

const CountriesRegionFilter = ({region, setRegion, query, setQuery}) => {
  const handleChange = (e) => {
    setRegion(e.target.value)
  }

  return (
    <div className="country-filter">
      <div>
        <label htmlFor="filter">Filter By Region: </label>
        <select onChange={handleChange} value={region} id="filter">
          <option value={"all"}>All</option>
          {regions.map((region, idx) => (
            <option key={idx} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
    </div>
  )
}

export default CountriesRegionFilter
