import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import About from "./pages/About";

class App extends Component {

  
  render() {
    return (
      <Router>
        <div>

          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/resources" component={Resources} />
          <Route path="/about" component={About} />

        </div>
      </Router>
    )
  };
}

export default App;
