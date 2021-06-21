export const fetchCountries = async () => {
  const results = await fetch("https://api.covid19api.com/countries")
  const data = await results.json()
  return data.map((country) => country.Slug).sort()
}

export const fetchCases = async (country, type = "confirmed") => {
  if (!country) {
    return -1
  }
  const res = await fetch(
    `https://api.covid19api.com/total/country/${country}/status/${type}`
  )
  const data = await res.json()

  return data[data.length - 1] && data[data.length - 1].Cases
    ? data[data.length - 1].Cases
    : -1
}
