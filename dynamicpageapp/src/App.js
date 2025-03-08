import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post'; // Dynamic Post Page
import NotFound from './NotFound'; // 404 Page
 
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/post/:id" component={Post} /> {/* Dynamic Post Page */}
          <Route component={NotFound} /> {/* 404 Page */}
        </Switch>
      </div>
    </Router>
  );
};
 
export default App;
