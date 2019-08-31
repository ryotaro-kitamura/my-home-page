import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom' 
import { RouteButton } from './styles'
import { HomeScreen } from '../../screen/HomeScreen'
import { AboutScreen } from '../../screen/AboutScreen/index'
import { PortFolioScreen } from '../../screen/PortFolioScreen/index'
import { MyStudyHistory } from '../../screen/AboutScreen/MyStudyHistory/index'
import { Programming } from '../../screen/AboutScreen/Programming/index'


export const Header = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div style={{top: 10, right: 10, position: 'fixed', zIndex: 1}}>
          <RouteButton><Link to='/'>Home</Link></RouteButton>
          <RouteButton><Link to='/about'>About</Link></RouteButton>
          <RouteButton><Link to='/portfolios'>PortFolios</Link></RouteButton>
        </div>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/about' component={AboutScreen} />
        <Route path='/portfolios' component={PortFolioScreen} />
        <Route path='/about/mystudyhistory' component={MyStudyHistory} />
        <Route path='/about/programming' component={Programming} />
      </BrowserRouter>
    </React.Fragment>
  )
}