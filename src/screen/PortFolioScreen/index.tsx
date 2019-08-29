import React, { useState }  from 'react'
import { SelectPortfolio } from './SelectPortfolio/index'
import { PortFolioDeatils } from './PortFolioDetails/index'
 
export interface PortFolio { 
  id: number
  name: string
  kind: string
  date: string
  url: string
  img: string
  backgroundcolor: string
}

export const PortFolioScreen = () => {
  const [ portFolio, setPortFolio ] = useState<PortFolio>({ id: 0, name: '', kind: '', date: '', url: '', img: '', backgroundcolor: '' })
  const portFolios = [
    {
      id: 1,
      name: 'とりま始める大学生通信',
      kind: '台湾留学記',
      date: '2018.9 - 2019.6',
      url: 'https://www.torimastart.com/',
      img: '../../../../public/images/torimastart.png',
      backgroundcolor: 'lightpink'
    },
    {
      id: 2,
      name: '個人ブログ',
      kind: '現在はプログラミング学習情報が中心。自作したWordPressテーマを使用しています。',
      date: '2019.5 - present',
      url: 'https://ryotaro-blog.xyz/',
      img: '../../../../public/images/ryotaro-blog.png',
      backgroundcolor: 'lightblue'
    },
    {
      id: 3,
      name: 'Railsポートフォリオ',
      kind: 'プログラミング学習やその他',
      date: '2019.5',
      url: 'https://tasumane.herokuapp.com/',
      img: '../../../../public/images/tasumane.png',
      backgroundcolor: 'lightgreen'
    },
    {
      id: 4,
      name: 'Reactポートフォリオ「Ryotaro\'s Home Page」',
      kind: '自己紹介用ポートフォリオ',
      date: '2019.8',
      url: '',
      img: '',
      backgroundcolor: 'lightgrey',
    }
  ]

  return (
    <React.Fragment>
      <SelectPortfolio portFolio={portFolio} portFolios={portFolios} setPortFolio={setPortFolio}/>
      <PortFolioDeatils portFolio={portFolio}/>
    </React.Fragment>
  )
}