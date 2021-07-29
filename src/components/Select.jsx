const Select = ({ selected, handleSelect, options, status, cases }) => {
  return (
    <>
      <select value={selected} onChange={handleSelect}>
        {options.map((slug) => (
          <option key={slug} value={slug}>
            {slug}
          </option>
        ))}
      </select>
      {cases && (
        <p className="result">
          {status.toUpperCase()} {cases}
        </p>
      )}
    </>
  )
}

export default Select
