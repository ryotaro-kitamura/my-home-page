import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomeScreen } from "../../../screen/HomeScreen";
import { AboutScreen } from "../../../screen/AboutScreen";
import { PortFolioScreen } from "../../../screen/PortFolioScreen";
import NavigationBar from "../NavigationBar";

export const Header = () => {
  return (
    <BrowserRouter>
      <BrowserRouter>
        <NavigationBar />
        <Route path='/my-home-page' component={HomeScreen} />
        <Route exact path='/about' component={AboutScreen} />
        <Route path='/portfolios' component={PortFolioScreen} />
      </BrowserRouter>
    </BrowserRouter>
  );
};
