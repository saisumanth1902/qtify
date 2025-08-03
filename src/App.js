import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
//import Search from "./components/Search/Search";
import Section from './components/Section/Section';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section
        title="Top Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/top"
      />
      <Section
        title="New Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/new"
      />
    </div>
  );
}

export default App;
