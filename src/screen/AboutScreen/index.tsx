import React from 'react'
import { Link } from 'react-router-dom'

export const AboutScreen = () => {
  return (
    <React.Fragment>
      <div style={{border: '1px solid black', padding: '20px'}}>
        <Link to='/about/mystudyhistory'>学歴</Link>
      </div>
      <div style={{border: '1px solid black', padding: '20px'}}>
        <Link to='/about/programming'>プログラミング</Link>
      </div>
    </React.Fragment>
  )
}