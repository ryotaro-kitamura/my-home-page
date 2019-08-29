import React from 'react'
import { PortFolio } from '../../PortFolioScreen/index'
import Button from '@material-ui/core/Button'
import { PortFolioInfo } from './styles'


interface Props {
  portFolio: PortFolio
  setPortFolio: Function
  portFolios: PortFolio[]
}

export const SelectPortfolio = (props: Props) => {
  const { portFolio, setPortFolio, portFolios } = props

  const PortFoliosList = portFolios.map(a => {
    return (
      <Button key={a.id ? a.id : ''} onClick={() => {
        console.log(portFolio)
        setPortFolio(a)
      }
      }>
        {a.name}
      </Button>
    )
  })

  const PortFolioDeatil = () => {
    return portFolio ? (
      <PortFolioInfo id={portFolio.id} >
        <dl>名前: {portFolio.name}</dl>
        <dl>内容: {portFolio.kind}</dl>
        <dl>作成時期: {portFolio.date}</dl>
        <dl>URL: {portFolio.url}</dl>
      </PortFolioInfo>
    ): (
      <React.Fragment></React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div>{PortFoliosList}</div>
      <div>{PortFolioDeatil}</div>
    </React.Fragment>
    
  )
}