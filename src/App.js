import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
