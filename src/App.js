import React from "react";
import "./sass/main.scss";

//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Header from "./components/miniComponents/Header";
import Footer from "./components/miniComponents/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
