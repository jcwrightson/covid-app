import { useEffect, useState } from "react"
import { fetchCountries, fetchCases } from "./api"

const useCovidData = (defaultSelected, defaultStatusType) => {
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState(defaultSelected)
  const [cases, setCases] = useState(0)

  useEffect(() => {
    fetchCountries().then(setCountries)
  }, [])

  useEffect(() => {
    fetchCases(selected, defaultStatusType).then(setCases)
  }, [selected, defaultStatusType])

  const handleSelect = (e) => {
    setSelected(e.target.value)
  }

  return {
    countries,
    cases,
    selected,
    handleSelect,
  }
}

export default useCovidData
