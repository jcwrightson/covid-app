import Result from "./Result"

const Select = ({
  selected,
  handleSelect,
  countries,
  cases,
  defaultStatusType = "confirmed",
}) => {
  return (
    <>
      <select value={selected} onChange={handleSelect}>
        {countries.map((slug) => (
          <option key={slug} value={slug}>
            {slug}
          </option>
        ))}
      </select>
      <Result cases={cases} status={defaultStatusType} />
    </>
  )
}

export default Select
