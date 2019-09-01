import React from 'react'
import { InterfaceAboutElement } from '../index'
import { AboutElementButton, SelectAboutDiv } from './styles'

interface Props {
  AboutElements: string[]
  SelectedAboutElement: InterfaceAboutElement
  SelectAboutElement: Function
}

export const SelectAbout = (props: Props) => {
  const { AboutElements, SelectedAboutElement, SelectAboutElement} = props
  
  const AboutElementButtons = AboutElements.map(AboutElement => {
    return (
      <AboutElementButton 
      onClick={() => {
        console.log(SelectedAboutElement)
        SelectAboutElement({　Name: AboutElement　})
      }}>
        {AboutElement}
      </AboutElementButton>
    )
  })

  return (
    <SelectAboutDiv>{AboutElementButtons}</SelectAboutDiv>
  )
}