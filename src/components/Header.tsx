import React from 'react'
import { AboutScreen } from '../screen/AboutScreen/index'
import { PortFolioScreen } from '../screen/PortFolioScreen/index'
import { MyStudyHistory } from '../screen/AboutScreen/MyStudyHistory/index'
import { BrowserRouter, Route, Link } from 'react-router-dom'


export const Header = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/portfolios'>PortFolios</Link>
        {/* <Route exact path='/' component={HomeScreen} /> */}
        <Route exact path='/about' component={AboutScreen} />
        <Route path='/portfolios' component={PortFolioScreen} />
        <Route path='/about/mystudyhistory' component={MyStudyHistory} />
        {/* <Route path='/about/programming' component={Programming} /> */}
      </BrowserRouter>
    </React.Fragment>
  )
}