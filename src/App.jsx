import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"

import Select from "./components/Select"
import withCovidData from "./hocs/withCovidData"

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
