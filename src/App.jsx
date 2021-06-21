import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import SelectCountry from "./SelectCountry"

const Routes = () => (
  <Switch>
    {/* <Route path="/:slug">
      <Covid />
    </Route> */}
    <Route path="/">
      <SelectCountry defaultStatusType={"confirmed"}/>
      <SelectCountry defaultStatusType={"recovered"}/>
      <SelectCountry defaultStatusType={"deaths"}/>
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
