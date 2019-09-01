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

  return SelectedAboutElement.Name !== '' ? (
    <Timeline>
      { SelectedAboutElement.Name === '学歴' ? (<MyStudyHistory />) : (<Programming />)}
    </Timeline>
  ) : (
    <Timeline></Timeline>
  )
}