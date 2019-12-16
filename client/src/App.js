import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Homepage from './pages/Homepage'
import Composting from './pages/Composting'
import About from './pages/About'
// import More from './pages/More'
import Recycling from './pages/Recycling'
import WasteCollection from './pages/Waste-collection'
import Signup from './pages/signup/createProfile'
import Login from './pages/Login/Login'
import Dashboard from "./component2/dashboard"
import User from "./component2/Users/users"



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/waste-collection" component={WasteCollection} />
          <Route exact path="/Recycling" component={Recycling} /> 
          <Route exact path="/Composting" component={Composting} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard"><Dashboard/></Route>
          <Route exact path="/dashboard/users"><Dashboard/></Route>
          <Route exact path="/dashboard/van"><Dashboard/></Route>
          <Route exact path="/dashboard/waste"><Dashboard/></Route>
          <Route exact path="/dashboard/dispatch"><Dashboard/></Route>
          <Route exact path="/dashboard/profile"><Dashboard/></Route>
        </Switch>
      </Router>
   
    </div>
  );
}


export default App;
