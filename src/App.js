import React from "react";
import "./sass/main.scss";

//router
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        {/* Home */}
        {/* Header */}
        {/* Banner */}
        {/* Search */}
        {/* Cards */}
        {/* Footer */}

        {/* Search Page */}
      </div>
    </Router>
  );
}

export default App;
