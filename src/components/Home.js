import React from "react";
import Header from "./miniComponents/Header";
import Banner from "./miniComponents/Banner";

import "../sass/main.scss";

function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <h1 className="home__text">I am the home page</h1>
    </div>
  );
}

export default Home;
