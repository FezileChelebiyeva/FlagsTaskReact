import React, { useState } from "react";
import "./index.scss";
const SearchComp = ({ data }) => {

  const searchCountry = (e) => {
    let newData = data.filter((element) =>
      element.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    console.log(newData);
  };

  const filterByRegion = (e) => {
    let newDataRegion = data.filter((element) =>
      element.region.includes(e.target.value)
    );
    console.log(newDataRegion);
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
