import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from './components/Home'
import './App.css'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/skills' exact component={Skills} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
