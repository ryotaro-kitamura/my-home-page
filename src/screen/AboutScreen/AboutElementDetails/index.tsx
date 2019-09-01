import React from 'react'
import { InterfaceAboutElement } from '../index'
import { MyStudyHistory } from './MyStudyHistory/index'
import { Programming } from './Programming/index'
import { Timeline } from './styles'


interface Props {
  SelectedAboutElement: InterfaceAboutElement
}

export const AboutElementDetails = (props: Props) => {
  const { SelectedAboutElement } = props
  
  return (
    <Timeline>
      <h3>タイムライン</h3>
      {SelectedAboutElement.Name !== '' ? (
        SelectedAboutElement.Name === '学歴' ? (<MyStudyHistory />) : (<Programming />)
      ): (
        <React.Fragment></React.Fragment>
      )}
    </Timeline>
  )
}