import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailScreen from "../views/DetailScreen/DetailScreen";
import PersonagensScreen from "../views/HomeScreen/PersonagensScreen";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonagensScreen />} />
        <Route path="/:id" element={<DetailScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
