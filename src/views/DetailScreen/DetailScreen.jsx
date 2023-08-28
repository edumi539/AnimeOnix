import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import "./index.css";

export default function DetailScreen() {
  const [searchparams] = useSearchParams();
  const image_url = searchparams.get("image_url");
  const synopsis = searchparams.get("synopsis");

  return (
    <div className="container-details">
      <img src={image_url} className="img-details" />
      <div className="container-synopsis">
        <h5 className="Synopsis">Synopsis</h5>
        <p className="text-details">{synopsis}</p>
      </div>
    </div>
  );
}
