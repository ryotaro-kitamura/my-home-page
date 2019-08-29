import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route,Link } from 'react-router-dom'
// import Route from "react-router-dom/Route"
//import { HomeScreen } from './screen/HomeScreen/index'
import { AboutScreen } from './screen/AboutScreen/index'
import { PortFolioScreen } from './screen/PortFolioScreen/index'
import { MyStudyHistory } from './screen/AboutScreen/MyStudyHistory/index'
//import { Programming } from './screen/AboutScreen/Programming/index'
import './index.css';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/portfolios'>PortFolios</Link>

    {/* <Route exact path='/' component={HomeScreen} /> */}
    <Route exact path='/about' component={AboutScreen} />
    <Route path='/portfolios' component={PortFolioScreen} />
    <Route path='/about/mystudyhistory' component={MyStudyHistory} />
    {/* <Route path='/about/programming' component={Programming} /> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
