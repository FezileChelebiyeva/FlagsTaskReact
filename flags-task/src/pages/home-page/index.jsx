import React, { useEffect, useState } from "react";
import CardComp from "../../components/card";
import SearchComp from "../../components/input-search";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const BASE_URL = "https://restcountries.com/v2/all";

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL).then((data) => setData(data.data));
  }, []);

  return (
    <>
      <SearchComp data={data} setData={setData}/>
      <CardComp data={data} />
    </>
  );
};

export default HomePage;
