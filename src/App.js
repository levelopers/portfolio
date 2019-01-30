import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home'
import './App.css'
import Projects from './pages/projects'
import About from './pages/about'
import UC from './components/underConstruction'

export default function App(props) {
  return (
    <div>
      {/* <UC/> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  )
};

