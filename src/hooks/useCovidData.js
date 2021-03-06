import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { fetchCountries, fetchCases } from "../api"

const useCovidData = (defaultSelected, defaultStatusType = "confirmed") => {
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState(defaultSelected)
  const [cases, setCases] = useState(0)

  const { slug } = useParams()

  const history = useHistory()

  useEffect(() => {
    fetchCountries().then(setCountries)
  }, [])

  useEffect(() => {
    fetchCases(selected, defaultStatusType).then(setCases)
  }, [selected, defaultStatusType])

  useEffect(() => {
    if (slug) {
      setSelected(slug)
    }
  }, [slug])

  const handleSelect = (e) => {
    history.push(`/${e.target.value}`)
  }

  return {
    status: defaultStatusType,
    options: countries,
    cases,
    selected,
    handleSelect,
    setSelected
  }
}

export default useCovidData
