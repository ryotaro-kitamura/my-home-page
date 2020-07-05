import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutScreen from '../../screen/AboutScreen';
import { PortFolioScreen } from '../../screen/PortFolioScreen';
import NavigationBar from '../atoms/NavigationBar';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="Global__Header">
        <NavigationBar />
      </div>
      <Switch>
        <div className="Global__Contents">
          <Route exact path="/" component={AboutScreen} />
          <Route path="/portfolios" component={PortFolioScreen} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};
