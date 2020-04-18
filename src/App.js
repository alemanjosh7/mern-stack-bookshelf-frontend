import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import CreateBook from "./components/CreateBook";
import BooksList from "./components/BooksList";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={BooksList} />
        <Route path="/edit/:id" component={CreateBook} />
        <Route path="/create" component={CreateBook} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
