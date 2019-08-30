import React from 'react';

interface skill {
  name: string
  //img:
}

export const Programming = () => {
  const skills: skill[] = [
    {
      name: 'HTML',
      //img: ''
    },
    {
      name: 'CSS',
      //img: ''
    },
    {
      name: 'JavaScript',
      //img: ''
    },
    {
      name: 'Ruby',
      //img: ''
    },
    {
      name: 'Rails',
      //img: ''
    },
    {
      name: 'React',
      //img: ''
    },
    {
      name: 'Github',
      //img: ''
    },
    {
      name: 'WordPress',
      //img: ''
    }
  ]

  const SkillList = skills.map(skill => {
    return (
      <div>
        <dl>{skill.name}</dl>
      </div>
    )
  })

  return (
    <div>{SkillList}</div>
  )
}