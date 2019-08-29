import React from 'react'
import { Link } from 'react-router-dom'

export const AboutScreen = () => {
  return (
    <div>
      <Link to='/about/mystudyhistory'>学歴</Link>
      <Link to='/about/programming'>プログラミング</Link>
    </div>
  )
}