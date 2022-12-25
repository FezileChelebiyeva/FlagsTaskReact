import React, { useEffect, useState } from "react";
import CardComp from "../../components/card";
import SearchComp from "../../components/input-search";
import axios from "axios";
const HomePage = () => {
  const [spinStatus, setSpinStatus] = useState(false);
  const BASE_URL = "https://restcountries.com/v2/all";

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL).then((data) => {
      setData(data.data);
      setSpinStatus(true);
    });
  }, []);

  return (
    <>
      <SearchComp setData={setData} />
      <CardComp spinStatus={spinStatus} data={data} />
    </>
  );
};

export default HomePage;
