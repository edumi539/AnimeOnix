import React from "react";
import { useLocation } from "react-router-dom";

export default function DetailScreen() {
  const location = useLocation();
  const myParam = location.state.params;
  return <div>Teste</div>;
}
