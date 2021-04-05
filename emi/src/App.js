import React from 'react';
import './App.css';
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Financial_Calculator from './Financial Calculator';
import Home from './Home';
import Personal from './Personal';
import Car from './Car';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Financial Calculator' exact component={Financial_Calculator} />       
        <Route path='/Home' component={Home} />
        <Route path='/Personal' component={Personal} />
        <Route path='/Car' component={Car} />
       
      </Switch>
    </Router>
  );
}
  
export default App;