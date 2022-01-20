import React from "react";

import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import AppHome from "./components/AppHome/AppHome";
import AppAbout from "./components/AppAbout/AppAbout";
import AppCommercialProjects from "./components/AppCommercialProjects/AppCommercialProjects";
import AppContact from "./components/AppContact/AppContact";

function App() {
  return (
    <>
      <AppHeader/>
      <AppHome/>
      <AppAbout/>
      <AppCommercialProjects/>
      <AppContact/>
    </>
  );
}

export default App;
