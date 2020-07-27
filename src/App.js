import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import MovieDetail from "./routes/MovieDetail";
import Navigation from "./components/Navigation";

import "./reset.css";

function App () {
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie-detail" component={MovieDetail}/>
  </HashRouter>)
}

export default App;