import React from 'react'
import Typed from 'react-typed'
import { Title } from './styles'
import ryotaro from '../../images/ryotaro_kitamura.jpg'

export const HomeScreen = () => {
  return (
    <React.Fragment>
      <div style={{borderBottom: '2px solid white', lineHeight: '100px', fontFamily: 'arial black', padding: '100px'}}>
        <img style={{ borderRadius: '50%', border: '10px solid black', width: '20%', height: '30%'}} src={ryotaro} alt=""/>
        <div style={{textAlign: 'end'}}>
          <div>
            <Typed
            style={{color: 'black', fontSize: '50px', display: 'inline-block', verticalAlign: 'middle'}}
            strings={['Hello World!']}
            typeSpeed={70}
            >
            </Typed>
          </div>
          <div>
            <Typed
            style={{color: 'black', fontSize: '50px', display: 'inline-block', verticalAlign: 'middle'}}
            strings={['I AM RYOTARO KITAMURA']}
            typeSpeed={70}
            startDelay={1000}
            >
            </Typed>
          </div>
        </div>
        <div style={{ borderRadius: '50%', border: '10px solid black'}}></div>
      </div>
      <div style={{borderBottom: '2px solid white', textAlign: 'center', fontFamily: 'arial black', padding: '200px'}}>
        <Title>ABOUT ME</Title>
      </div>
      <div style={{textAlign: 'center', fontFamily: 'arial black', padding: '200px'}}>
        <Title>PORTFOLIOS</Title>
      </div>
    </React.Fragment>
    
  )
}


