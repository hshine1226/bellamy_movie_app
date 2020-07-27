import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import MovieDetail from "./routes/MovieDetail";
import Navigation from "./components/Navigation";

import "./reset.css";

function App () {
  return (
  <BrowserRouter>
    <Navigation />
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie-detail" component={MovieDetail}/>
  </BrowserRouter>)
}

export default App;