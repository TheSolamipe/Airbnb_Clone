import React from "react";
import Header from "./miniComponents/Header";
import Banner from "./miniComponents/Banner";
import Card from "./miniComponents/Card";

import "../sass/main.scss";

function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <div className="home__section">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="home__section">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
