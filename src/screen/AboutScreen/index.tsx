import React, { useState } from 'react'
import { AboutScreenDiv } from './styles'
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
      <h2>ABOUT ME</h2>
      <p>ボタンを選択すると、該当の情報を確認できます</p>
      <SelectAbout AboutElements={AboutElements} SelectedAboutElement={SelectedAboutElement} SelectAboutElement={SelectAboutElement}/>
      <AboutElementDetails SelectedAboutElement={SelectedAboutElement}/>
    </AboutScreenDiv>
  )
}