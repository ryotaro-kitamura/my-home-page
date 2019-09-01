import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom' 
import { Main, About, Title, Info, InfoButton, Portfolio, Contact, TwitterButtonDiv, TwitterShare } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            style={{padding: '70px 0', color: 'black', fontSize: '50px', display: 'inline-block', verticalAlign: 'middle'}}
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
        <Info>学歴・プログラミング歴</Info>
        <Link to='/about'><InfoButton style={{color: 'black', border: '2px solid black'}}>ABOUT</InfoButton></Link>
      </About>
      <Portfolio>
        <Title>PORTFOLIOS</Title>
        <Info>ポートフォリオ</Info>
        <Link to='/portfolios'><InfoButton style={{color: 'black', border: '2px solid black'}}>PORTFOLIOS</InfoButton></Link>
      </Portfolio>
      <Contact>
        <Title>CONTACT</Title>
        <Info>e-mail: k.ryoutaro.g@gmail.com</Info>
        <TwitterButtonDiv>
          <TwitterShare href={'https://twitter.com/agepiitweets'}><FontAwesomeIcon icon={['fab','twitter']} /></TwitterShare>
        </TwitterButtonDiv>
      </Contact>
    </React.Fragment>
    
  )
}


