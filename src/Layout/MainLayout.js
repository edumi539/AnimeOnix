import React from "react";
import HeaderBar from "../components/Header/header";
import PersonagensScreen from "../views/HomeScreen/PersonagensScreen";
const MainLayout = () => {
  return (
    <>
      <HeaderBar />
      <PersonagensScreen />
    </>
  );
};

export default MainLayout;
