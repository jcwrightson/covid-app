import useCovidData from "./useCovidData"

const SelectCountry = ({ defaultSelected, defaultStatusType }) => {
  const { countries, cases, selected, handleSelect } = useCovidData(
    defaultSelected,
    defaultStatusType
  )

  return (
    <>
      <h1>Covid-19</h1>
      <select value={selected} onChange={handleSelect}>
        {countries.map((slug) => (
          <option key={slug} value={slug}>
            {slug}
          </option>
        ))}
      </select>
      <p>{defaultStatusType} Cases: {cases}</p>
    </>
  )
}

export default SelectCountry
