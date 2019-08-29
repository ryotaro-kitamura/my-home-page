import React from 'react'
import { PortFolio } from '../../PortFolioScreen/index'
import Button from '@material-ui/core/Button'


interface Props {
  portFolio: PortFolio
  setPortFolio: Function
  portFolios: PortFolio[]
}

export const SelectPortfolio = (props: Props) => {
  const { portFolio, setPortFolio, portFolios } = props

  const PortFoliosList = portFolios.map(a => {
    return (
      <Button 
        key={a.id ? a.id : ''}
        style={{ backgroundColor: a.backgroundcolor }}
        onClick={() => {
        console.log(portFolio)
        setPortFolio(a)
        }
      }>
        {a.name}
      </Button>
    )
  })

  return (
    <React.Fragment>{PortFoliosList}</React.Fragment>
  )
}