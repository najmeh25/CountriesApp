'use client'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [showLargePopulationOnly, setShowLargePopulationOnly] = useState(false)
  const [sortOrder, setSortOrder] = useState('asc') // 'asc' or 'desc'

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error('Error fetching countries:', error)
      })
  }, [])

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    )
    .filter((country) =>
      showLargePopulationOnly ? country.population > 50000000 : true
    )
    .sort((a, b) => {
      const nameA = a.name.common.toLowerCase()
      const nameB = b.name.common.toLowerCase()
      if (sortOrder === 'asc') {
        return nameA.localeCompare(nameB)
      } else {
        return nameB.localeCompare(nameA)
      }
    })

  return (
    <main className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Countries of the World 🌍</h1>

      {/* Filters & Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded shadow w-full md:w-1/2"
        />

        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={showLargePopulationOnly}
            onChange={(e) => setShowLargePopulationOnly(e.target.checked)}
          />
          Only show countries with population &gt; 50 million
        </label>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border rounded shadow"
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>

      {/* Display countries */}
      {filteredCountries.length === 0 ? (
        <p className="text-center text-gray-500">No countries found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredCountries.map((country) => (
            <a
              key={country.cca3}
              href={`/country/${country.cca3.toLowerCase()}`}
              className="border rounded shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden block"
            >
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h2 className="font-semibold text-lg">{country.name.common}</h2>
                <p className="text-sm text-gray-600">Region: {country.region}</p>
                <p className="text-sm text-gray-600">Population: {country.population.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Capital: {country.capital?.[0] || 'N/A'}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </main>
  )
}
