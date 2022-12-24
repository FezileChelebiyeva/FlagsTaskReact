import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const params = useParams();

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://restcountries.com/v3.1/name/${name}`)
  //     .then((data) => setData(data.data));
  // }, []);

  // console.log(params.name);

  return <div>DetailsPage</div>;
};

export default DetailsPage;
