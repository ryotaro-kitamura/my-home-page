import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutScreen from './screen/AboutScreen';
import { PortFolioScreen } from './screen/PortFolioScreen';
import NavigationBar from './components/atoms/NavigationBar';

// fontawsome の設定
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab, fas, far);

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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

export default App
