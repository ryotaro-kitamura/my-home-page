import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Header } from './components/Header/Header'
import './index.css';
import * as serviceWorker from './serviceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { HomeScreen } from './screen/HomeScreen';

library.add(fab, fas, far);

ReactDOM.render(
  <React.Fragment>
    <Header />
    <HomeScreen />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
