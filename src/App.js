import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home'
import './App.css'
import Projects from './pages/projects'
import UC from './components/underConstruction'

export default function App(props){
  return(
    <div>
      {/* <UC/> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
        </Switch>
      </Router>
    </div>
  )
};

