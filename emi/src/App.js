import React from 'react';
import './App.css';
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Personal from './Personal';
import Car from './Car';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
       
        <Route path='/Home' exact component={Home} />
        <Route path='/Personal' component={Personal} />
        <Route path='/Car' component={Car} />
       
      </Switch>
    </Router>
  );
}
  
export default App;