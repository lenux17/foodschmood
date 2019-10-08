import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Links } from "./Links";
import { Slider } from "./Slider";
import { YourCatSection } from "./YourCatSection";
import { DescriptionSection } from "./DescriptionSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Links />
      <Slider />
      <YourCatSection />
      <DescriptionSection />
    </div>
  );
}

export default App;
