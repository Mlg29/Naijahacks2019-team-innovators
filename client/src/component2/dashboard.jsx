import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Shell from '../common/shell';
import Logiin from "../pages/Login/Login"
import menu from '../common/menu';
import DashboardHome from './dashboard-home';
import Users from "../component2/Users/users";
import Van from "../component2/van/van";
import Waste from "../component2/waste/waste";
import Profile from "../component2/profile/profile";
import Model from "./model/model"




function Dashboard(props) {
  console.log(props.path);
  
  return (
    <Shell menu={menu.admin}>
      <Switch>
        <Route exact path="/dashboard">
          <DashboardHome/>
        </Route>
        <Route exact path="/dashboard/users">
          <Users />
        </Route>
        <Route exact path="/dashboard/van">
          <Van />
        </Route>
        <Route exact path="/dashboard/waste">
          <Waste/>
        </Route>
        <Route exact path="/dashboard/profile">
          <Profile/>
        </Route>
        {/* <Route exact path={`${props.match.path}/Logiin`}>
          <Logiin />
        </Route>
        <Route exact path={`${props.match.path}/Logiin`}>
          <Logiin />
        </Route> */}
      </Switch>
    </Shell>
  );
}

export default Dashboard;
