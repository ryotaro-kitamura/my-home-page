import React, { ReactElement } from "react";
import Card from "../../atoms/Card";

interface SkillCard {
  icon?: ReactElement;
  image?: string;
  color?: string;
  name: string;
  description: string;
}

const SkillCard: React.FC<SkillCard> = ({
  icon,
  image,
  name,
  description,
  color
}) => {
  const fontColor = color && color;
  return (
    <Card className='SkillCard'>
      {icon && (
        <p className='SkillCard__Icon' style={{ color: fontColor }}>
          {icon}
        </p>
      )}
      {image && <img className='SkillCard__Image' src={image} alt='' />}
      <div className='SkillCard__Text'>
        <p className='SkillCard__Title'>{name}</p>
        <p className='SkillCard__Description'>{description}</p>
      </div>
    </Card>
  );
};

export default SkillCard;
