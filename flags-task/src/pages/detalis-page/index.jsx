import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.scss";

const DetailsPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((data) => setData(data.data));
  }, []);

  return (
    <div id="details-part">
      {data.map((element) => {
        return (
          <div key={element}>
            <div className="btn">

            <button className="backBtn" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left-long"></i> Back
            </button>
            </div>
            <div className="card-info">
              <div className="image">
                <img src={element.flags.png} alt="flagimage" />
              </div>
              <div className="info-part">
                <h3>{element.name.common}</h3>
                <div className="info">
                  <div className="left">
                    <p>
                      <span className="name">Native Name:</span>{" "}
                      <span className="value">
                        {Object.values(element.name.nativeName)[0].common}
                      </span>
                    </p>
                    <p>
                      <span className="name">Population:</span>{" "}
                      <span className="value">{element.population}</span>
                    </p>
                    <p>
                      <span className="name">Region:</span>{" "}
                      <span className="value">{element.region}</span>
                    </p>
                    <p>
                      <span className="name">Sub Region:</span>{" "}
                      <span className="value">{element.subregion}</span>
                    </p>
                    <p>
                      <span className="name">Capital:</span>{" "}
                      <span className="value">{element.capital}</span>
                    </p>
                  </div>
                  <div className="right">
                    <p>
                      <span className="name">Top Level Domain:</span>{" "}
                      <span className="value">{element.tld}</span>
                    </p>
                    <p>
                      <span className="name">Currencies:</span>{" "}
                      <span className="value">{Object.values(element.currencies)[0].name}</span>
                    </p>
                    <p>
                      <span className="name">Languages:</span>{" "}
                      {Object.values(element.languages).map((el) => {
                        return <span key={el} className="value">{el}, </span>;
                      })}
                    </p>
                  </div>
                </div>
                <div className="info-footer">
                  <span>Border Countries: </span>
                  {element.borders?.map((el) => {
                    return (
                      <span key={el}>
                        <button>{el}</button>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailsPage;
