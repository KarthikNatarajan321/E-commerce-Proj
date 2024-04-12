import React from "react";
import "./CSS/Home.css";

import Slider from "./Slider";

const Home = () => {
  return (
    <div className="home-container">
      <div className="container">
        <Slider />
      </div>
    </div>
  );
};

export default Home;
