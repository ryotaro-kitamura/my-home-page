import React from 'react'
import Typed from 'react-typed'
import { Main, About, Title, Info, InfoButton, Portfolio } from './styles'
import ryotaro from '../../images/ryotaro_kitamura.jpg'

export const HomeScreen = () => {
  return (
    <React.Fragment>
      <Main>
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
      </Main>
      <About>
        <Title>ABOUT ME</Title>
        <Info>学歴・職歴・プログラミング歴</Info>
        <InfoButton style={{color: 'black', border: '2px solid black'}}>About Me</InfoButton>
      </About>
      <Portfolio>
        <Title>PORTFOLIOS</Title>
        <Info>ポートフォリオ</Info>
        <InfoButton style={{color: 'black', border: '2px solid black'}}>PORTFOLIOS</InfoButton>
      </Portfolio>
    </React.Fragment>
    
  )
}


