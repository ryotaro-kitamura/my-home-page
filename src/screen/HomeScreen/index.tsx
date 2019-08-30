import React from 'react'
import Typed from 'react-typed'
import ryotaro from '../../images/ryotaro_kitamura.jpg'

export const HomeScreen = () => {
  return (
    <React.Fragment>
      <div style={{background: 'linear-gradient(-45deg, rgb(255, 49, 2), rgb(255, 234, 84))', lineHeight: '100px', fontFamily: 'arial black', padding: '200px'}}>
        <img style={{ borderRadius: '50%', border: '10px solid black', width: '20%', height: '30%'}} src={ryotaro} alt=""/>
        <div style={{textAlign: 'end'}}>
          <div>
            <Typed
            style={{color: 'black', fontSize: '50px', display: 'inline-block', verticalAlign: 'middle'}}
            strings={['Hello World!']}
            typeSpeed={50}
            >
            </Typed>
          </div>
          <div>
            <Typed
            style={{color: 'black', fontSize: '50px', display: 'inline-block', verticalAlign: 'middle'}}
            strings={['I AM RYOTARO KITAMURA']}
            typeSpeed={50}
            startDelay={1000}
            >
            </Typed>
          </div>
        </div>
        <div style={{borderRadius: '50%', border: '10px solid black'}}></div>
      </div>
      <div style={{background: 'linear-gradient(-45deg, rgb(255, 49, 2), rgb(255, 234, 84))', textAlign: 'center', fontFamily: 'arial black', padding: '200px'}}>
        <dl>ABOUT ME</dl>
      </div>
      <div style={{background: 'linear-gradient(-45deg, rgb(255, 49, 2), rgb(255, 234, 84))', textAlign: 'center', fontFamily: 'arial black', padding: '200px'}}>
        <dl>PORTFOLIOS</dl>
      </div>
    </React.Fragment>
    
  )
}


