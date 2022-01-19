import React from "react";

import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import AppHome from "./components/AppHome/AppHome";
import AppAbout from "./components/AppAbout/AppAbout";
import AppProjects from "./components/AppProjects/AppProjects";
import AppContact from "./components/AppContact/AppContact";

function App() {
  return (
    <>
      <AppHeader/>
      <AppHome/>
      <AppAbout/>
      <AppProjects/>
      <AppContact/>
    </>
  );
}

export default App;
