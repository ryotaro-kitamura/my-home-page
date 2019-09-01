import React from 'react'
import { PortFolio } from '../../PortFolioScreen/index'
import { PortFolioInfo, PortFolioImage } from './styles'


interface Props {
  portFolio: PortFolio
}

export const PortFolioDeatils = (props: Props) => {

  const { portFolio } = props
    return (
    <React.Fragment>
      <PortFolioInfo id={portFolio.id} >
        <dl style={{textAlign: 'center'}}>ポートフォリオ詳細</dl>
        <dl>名前: {portFolio.name}</dl>
        <dl>内容: {portFolio.kind}</dl>
        <dl>作成時期: {portFolio.date}</dl>
        <dl>URL: <a href={portFolio.url}>{portFolio.url}</a></dl>
      </PortFolioInfo>
      <PortFolioImage>
        <dl style={{textAlign: 'center'}}>キャプチャ画像</dl>
        {portFolio.img ? (<img style={{width: '100%', height: '100%'}} src={portFolio.img} alt=""/>) : ''}
      </PortFolioImage>
    </React.Fragment>
  )
}

