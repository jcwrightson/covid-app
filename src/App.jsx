import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import Select from "./Select"
import withCovidData from "./withCovidData"

// Use HOC to map state to props
const SelectCountry = withCovidData(Select)

const Routes = () => (
  <Switch>
    <Route path="/:slug">
      <SelectCountry />
    </Route>

    <Route path="/">
      <SelectCountry />
    </Route>

    {/* <Route path="/">
      <SelectCountry defaultSelected={"sweden"} defaultStatusType={"recovered"} />
    </Route> */}
  </Switch>
)

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
