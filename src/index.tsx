import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Header } from './components/Header'
import './index.css';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.Fragment>
    <Header />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
