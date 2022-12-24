import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { uid } from "react-uid";
import "./index.scss";
import { Link } from "react-router-dom";

const CardComp = ({ data }) => {
  return (
    <div className="card-comp">
      {data.map((element) => {
        return (
          <Link to={element.name} key={uid(element)}>
            <div className="card-col">
              <div className="cards">
                <img
                  className="cards-img"
                  variant="top"
                  src={element.flags.png}
                />
                <div className="card-body">
                  <h5 className="img-name">{element.name}</h5>
                  <div className="card-title">
                    <p>
                      <span className="title-name">Population:</span>{" "}
                      <span className="name-info">{element.population}</span>
                    </p>
                    <p>
                      <span className="title-name">Region:</span>{" "}
                      <span className="name-info">{element.region}</span>
                    </p>
                    <p>
                      <span className="title-name">Capital:</span>{" "}
                      <span className="name-info">{element.capital}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardComp;
