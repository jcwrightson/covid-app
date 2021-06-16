import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CovidStatus from "./CovidStatus";

const Routes = () => (
  <Switch>
    <Route path="/:slug">
      <CovidStatus />
    </Route>
    <Route path="/">
      <CovidStatus defaultSelected="united-kingdom" />
    </Route>
  </Switch>
);

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
