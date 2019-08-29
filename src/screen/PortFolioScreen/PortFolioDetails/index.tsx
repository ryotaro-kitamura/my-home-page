import React from 'react'
import { PortFolio } from '../../PortFolioScreen/index'
import { PortFolioInfo } from '../SelectPortfolio/styles'


interface Props {
  portFolio: PortFolio
}

export const PortFolioDeatils = (props: Props) => {

  const { portFolio } = props
  return portFolio.id !== 0 ? (
    <PortFolioInfo id={portFolio.id} >
      <dl style={{textAlign: 'center'}}>ポートフォリオ詳細</dl>
      <dl>名前: {portFolio.name}</dl>
      <dl>内容: {portFolio.kind}</dl>
      <dl>作成時期: {portFolio.date}</dl>
      <dl>URL: {portFolio.url}</dl>
    </PortFolioInfo>
  ): (
    <React.Fragment></React.Fragment>
  )
}

