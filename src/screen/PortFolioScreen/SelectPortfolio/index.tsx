import React from 'react'
import { PortFolio } from '../../PortFolioScreen/index'
import { SelectButton } from './styles'

interface Props {
  portFolio: PortFolio
  setPortFolio: Function
  portFolios: PortFolio[]
}

export const SelectPortfolio = (props: Props) => {
  const { portFolio, setPortFolio, portFolios } = props

  const PortFoliosList = portFolios.map(a => {
    return (
      <SelectButton 
        key={a.id ? a.id : ''}
        onClick={() => {
        console.log(portFolio)
        setPortFolio(a)
        }
      }>
        {a.name}
      </SelectButton>
    )
  })

  return (
    <React.Fragment>{PortFoliosList}</React.Fragment>
  )
}