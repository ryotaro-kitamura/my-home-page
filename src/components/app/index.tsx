import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeScreen } from "../../screen/HomeScreen";
import { AboutScreen } from "../../screen/AboutScreen";
import { PortFolioScreen } from "../../screen/PortFolioScreen";
import NavigationBar from "../atoms/NavigationBar";

export const App = () => {
  return (
    <BrowserRouter>
      <div className='Global__Header'>
        <NavigationBar />
      </div>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/about' component={AboutScreen} />
        <Route path='/portfolios' component={PortFolioScreen} />
      </Switch>
    </BrowserRouter>
  );
};
