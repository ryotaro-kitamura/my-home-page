import React from 'react'
import Typed from 'react-typed'

export const HomeScreen = () => {
  return (
    <React.Fragment>
      <div>
        <Typed 
        strings={['Hello World!']}
        typeSpeed={50}
        >
        </Typed>
      </div>
      <div>
        <Typed 
        strings={['I AM RYOTARO KITAMURA']}
        typeSpeed={50}
        startDelay={1000}
        >
        </Typed>
      </div>
    </React.Fragment>
    
  )
}


