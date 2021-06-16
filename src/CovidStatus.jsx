import "./App.css";
import { useState, useEffect } from "react";
import Result from "./Result";

import { fetchCountries, fetchCases } from "./api";
import { useHistory, useParams } from "react-router-dom";

const CovidStatus = ({ defaultSelected = "" }) => {
  // Get `slug` from route param
  const { slug } = useParams();

  // Allow us to `push` to the history array and thus trigger a shallow url change
  const history = useHistory();

  // Define State
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState(defaultSelected);
  const [cases, setCases] = useState(null);

  // On component mount fetch list of countries
  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);

  // When `slug` changes, set `selected`
  useEffect(() => {
    // This effect will also fire at mount, so let's
    // make sure there is something in `slug` before we set it
    if (slug) {
      setSelected(slug);
    }
  }, [slug]);

  // When `selected` changes, fetch cases
  useEffect(() => {
    if (selected) {
      fetchCases(selected).then(setCases);
    }
  }, [selected]);

  // When user selects a country, navigate to `/:slug`. No need to do the `fetchCases` here like before
  // as our `useEffect` above will react to the changing `slug` and do the fetch for us.
  const onSelectCountry = (event) => history.push(`/${event.target.value}`);

  return (
    <>
      <h1>Covid-19</h1>
      <select onChange={onSelectCountry} value={selected}>
        {countries.map((slug) => (
          <option key={slug} value={slug}>
            {slug.toUpperCase()}
          </option>
        ))}
      </select>
      {cases && <Result cases={cases} />}
    </>
  );
};

export default CovidStatus;
