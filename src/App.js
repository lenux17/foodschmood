import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Links } from "./Links";
import { Slider } from "./Slider";
import { YCSection } from "./YCSection";
import { DSection } from "./DSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Links />
      <Slider />
      <YCSection />
      <DSection />
    </div>
  );
}

export default App;
