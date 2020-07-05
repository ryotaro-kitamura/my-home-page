import React from 'react';
import { AboutPageCardProps } from '../../../screen/AboutScreen/aboutScreen';
import Card from '../../atoms/Card';

const SkillCard = (props: Partial<AboutPageCardProps>) => {
  return (
    <Card className="SkillCard">
      {typeof props.icon === 'string' ? (
        <img className="SkillCard__Icon_image" src={props.icon} alt="" />
      ) : (
        <p className="SkillCard__Icon">{props.icon}</p>
      )}
      <div className="SkillCard__Text">
        <p className="SkillCard__Title">{props.name}</p>
        {props.period && <p className="SkillCard__Period">{props.period}</p>}
        <p className="SkillCard__Description">{props.description}</p>
      </div>
    </Card>
  );
};

export default SkillCard;
