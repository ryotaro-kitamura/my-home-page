import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom' 
import { RouteButton } from './styles'
import { HomeScreen } from '../../screen/HomeScreen'
import { AboutScreen } from '../../screen/AboutScreen/index'
import { PortFolioScreen } from '../../screen/PortFolioScreen/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Header = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div style={{top: 10, right: 10, position: 'fixed', zIndex: 1}}>
          <Link to='/my-home-page'><RouteButton><FontAwesomeIcon icon={['fas', 'home']}/>Home</RouteButton></Link>
          <Link to='/about'><RouteButton><FontAwesomeIcon icon={['far', 'address-card']}/>About</RouteButton></Link>
          <Link to='/portfolios'><RouteButton>PortFolios</RouteButton></Link>
        </div>
        <Route path='/my-home-page' component={HomeScreen} />
        <Route exact path='/about' component={AboutScreen} />
        <Route path='/portfolios' component={PortFolioScreen} />
      </BrowserRouter>
    </React.Fragment>
  )
}
