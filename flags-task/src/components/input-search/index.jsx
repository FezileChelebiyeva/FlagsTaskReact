import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";

const SearchComp = ({ setData }) => {
  const BASE_URL = "https://restcountries.com/v2/all";

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL).then((data) => setCountries(data.data));
  }, []);

  const searchCountry = (e) => {
    let newData = countries.filter((element) =>
      element.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setData(newData);
  };

  const filterByRegion = (e) => {
    let newDataRegion = countries.filter((element) =>
      element.region.includes(e.target.value)
    );
    setData(newDataRegion);
  };

  return (
    <div className="search-filter">
      <div className="input-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          onChange={(e) => searchCountry(e)}
          type="text"
          placeholder="Search for a country…"
        />
      </div>
      <div className="filter-region">
        <select onChange={(e) => filterByRegion(e)}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchComp;
