import React from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

export default function DetailScreen() {
  const location = useLocation();
  const myParam = location.state.params ? location.state.params : "";
  console.log(myParam);

  return (
    <div className="container-details">
      <img src={myParam.image_url} className="img-details" />
      <div className="container-synopsis">
        <h5 className="Synopsis">Synopsis</h5>
        <p className="text-details">{myParam.synopsis}</p>
      </div>
    </div>
  );
}
