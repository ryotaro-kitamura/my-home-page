import React from 'react'
import Typed from 'react-typed'
import { Title, Info, InfoButton } from './styles'
import ryotaro from '../../images/ryotaro_kitamura.jpg'

export const HomeScreen = () => {
  return (
    <React.Fragment>
      <div style={{background: 'linear-gradient(-45deg, rgb(255, 49, 2), rgb(255, 234, 84))', borderBottom: '2px solid white', lineHeight: '100px', fontFamily: 'arial black', padding: '30px'}}>
        <div>
          <div style={{textAlign: 'center'}}>
            <img style={{ borderRadius: '50%', border: '10px solid black', width: '20%', height: '30%'}} src={ryotaro} alt=""/>
          </div>
          <div style={{textAlign: 'end'}}>
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
      </div>
      <div style={{borderBottom: '2px solid white', textAlign: 'center', fontFamily: 'arial black', padding: '100px'}}>
        <Title>ABOUT ME</Title>
        <Info>学歴・職歴・プログラミング歴</Info>
        <InfoButton style={{color: 'black', border: '2px solid black'}}>About Me</InfoButton>
      </div>
      <div style={{background: 'linear-gradient(-45deg, rgb(255, 49, 2), rgb(255, 234, 84))', textAlign: 'center', fontFamily: 'arial black', padding: '100px'}}>
        <Title>PORTFOLIOS</Title>
        <Info>ポートフォリオ</Info>
        <InfoButton style={{color: 'black', border: '2px solid black'}}>PORTFOLIOS</InfoButton>
      </div>
    </React.Fragment>
    
  )
}


