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



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="https://naijarecycler.netlify.com/" component={Homepage} />
          <Route exact path="https://naijarecycler.netlify.com/about" component={About} />
          <Route exact path="https://naijarecycler.netlify.com/waste-collection" component={WasteCollection} />
          <Route exact path="https://naijarecycler.netlify.com/Recycling" component={Recycling} /> 
          <Route exact path="https://naijarecycler.netlify.com/Composting" component={Composting} />
          <Route exact path="https://naijarecycler.netlify.com/signup" component={Signup} />
          <Route exact path="https://naijarecycler.netlify.com/login" component={Login} />
        </Switch>
      </Router>
   
    </div>
  );
}


export default App;
