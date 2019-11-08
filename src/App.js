import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Links } from "./Links";
import { Slider } from "./Slider";
import { YourCatSection } from "./YourCatSection";
import { DescriptionSection } from "./DescriptionSection";
import { CatalogueSection } from "./CatalogueSection";
import { FacebookSection } from "./FacebookSection";
import { AboutSection } from "./AboutSection";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Links />
      <Slider />
      <YourCatSection />
      <DescriptionSection />
      <CatalogueSection />
      <FacebookSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
