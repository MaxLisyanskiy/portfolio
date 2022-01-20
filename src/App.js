import React from "react";

import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import AppHome from "./components/AppHome/AppHome";
import AppAbout from "./components/AppAbout/AppAbout";
import AppCommercialProjects from "./components/AppCommercialProjects/AppCommercialProjects";
import AppContact from "./components/AppContact/AppContact";
import AppPetProjects from "./components/AppPetProjects/AppPetProjects";

function App() {
  return (
    <>
      <AppHeader/>
      <AppHome/>
      <AppAbout/>
      <AppCommercialProjects/>
      <AppPetProjects/>
      <AppContact/>
    </>
  );
}

export default App;
