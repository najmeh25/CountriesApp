// src/app/country/[code]/page.jsx

export default async function CountryDetails({ params }) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.code}`);
  if (!res.ok) {
    throw new Error("Failed to fetch country data");
  }

  const [country] = await res.json();

  return (
  <main className="p-4 flex flex-col items-center">
    <a href="/" className="underline">← Back</a>
    <h1 className="text-2xl font-bold mt-4">{country.name.common}</h1>
    <img src={country.flags.png} alt={country.name.common} className="w-64 h-auto my-4" />
    <p><strong>Region:</strong> {country.region}</p>
    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    <p><strong>Capital:</strong> {country.capital?.[0]}</p>
    <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
    <p><strong>Currency:</strong> {
      Object.values(country.currencies || {})
        .map((cur) => `${cur.name} (${cur.symbol})`)
        .join(', ')
    }</p>
    
    {country.borders?.length > 0 && (
      <div className="mt-4">
        <strong>Borders:</strong>
        <ul className="list-disc list-inside">
          {country.borders.map((borderCode) => (
            <li key={borderCode}>
              <a href={`/country/${borderCode.toLowerCase()}`} className="text-blue-600 underline">
                {borderCode}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </main>
);

}


export async function generateStaticParams() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return countries.map((country) => ({
    code: country.cca3.toLowerCase(),
  }));
}
