import useCovidData from "./useCovidData"

const withCovidData = (Component) => (props) => {
  const covidData = useCovidData(props.defaultSelected, props.defaultStatusType)
  return <Component {...covidData} {...props} />
}

export default withCovidData
