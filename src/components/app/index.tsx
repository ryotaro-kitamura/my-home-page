import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeScreen } from "../../screen/HomeScreen";
import { PortFolioScreen } from "../../screen/PortFolioScreen";
import NavigationBar from "../atoms/NavigationBar";
import AboutScreen from "../../screen/AboutScreen";

export const App = () => {
  return (
    <BrowserRouter>
      <div className='Global__Header'>
        <NavigationBar />
      </div>
      <Switch>
        <div className='Global__Contents'>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/portfolios' component={PortFolioScreen} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};
