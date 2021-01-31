import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from './components/Home'
import './App.css'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/skills' exact component={Skills} />
          <Route path='/projects' exact component={Projects} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
