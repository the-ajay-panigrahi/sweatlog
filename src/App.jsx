import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WorkoutGrid from "./components/WorkoutGrid";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <WorkoutGrid />
      <Footer />
    </div>
  );
};

export default App;
