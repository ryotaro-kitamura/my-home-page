import React, { useState } from 'react'
import { AboutScreenDiv } from './styles'
import　{ BasicInfo } from './BasicInfo/index'
import { SelectAbout } from './SelectAbout/index'
import { AboutElementDetails } from './AboutElementDetails/index'

export interface InterfaceAboutElement {
  Name: string
}

export const AboutScreen = () => {
  const AboutElements = ['学歴', 'プログラミング歴']
  const [SelectedAboutElement, SelectAboutElement] = useState<InterfaceAboutElement>({ Name: '' })

  return (
    <AboutScreenDiv>
      <h2 style={{textAlign: 'center'}}>ABOUT ME</h2>
      <BasicInfo />
      <h2 style={{textAlign: 'center'}}>MORE INFO</h2>
      <div style={{textAlign: 'center'}}>
        <p>ボタンを選択すると、該当の情報をタイムラインで確認できます</p>
        <SelectAbout AboutElements={AboutElements} SelectedAboutElement={SelectedAboutElement} SelectAboutElement={SelectAboutElement}/>
      </div>
      <AboutElementDetails SelectedAboutElement={SelectedAboutElement}/>
    </AboutScreenDiv>
  )
}