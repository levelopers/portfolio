import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home'
import './App.css'
import UC from './components/underConstruction'

export default function App(props){
  return(
    <div>
      {/* <UC/> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  )
};

