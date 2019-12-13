import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Homepage from './pages/Homepage'
import Composting from './pages/Composting'
import About from './pages/About'
import More from './pages/More'
import Recycling from './pages/Recycling'
import WasteCollection from './pages/Waste-collection'



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
          <Route exact path="/more" component={More} />
        </Switch>
      </Router>
   
    </div>
  );
}


export default App;
