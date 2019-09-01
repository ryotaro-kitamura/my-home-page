import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom' 
import { Main, About, Title, Info, InfoButton, Portfolio, Contact } from './styles'
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
        <Info>学歴・職歴・プログラミング歴</Info>
        <InfoButton style={{color: 'black', border: '2px solid black'}}><Link to='/about'>ABOUT</Link></InfoButton>
      </About>
      <Portfolio>
        <Title>PORTFOLIOS</Title>
        <Info>ポートフォリオ</Info>
        <InfoButton style={{color: 'black', border: '2px solid black'}}><Link to='/portfolios'>PORTFOLIOS</Link></InfoButton>
      </Portfolio>
      <Contact>
        <Title>Contact</Title>
        <Info>e-mail: k.ryoutaro.g@gmail.com</Info>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,color: 'white', margin: '0 auto', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(29,161,242,1.00)'}}>
          <FontAwesomeIcon icon={['fab','twitter']} />
        </div>
      </Contact>
    </React.Fragment>
    
  )
}


