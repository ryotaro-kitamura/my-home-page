import React from "react";
import Card from "../../atoms/Card";

interface PortfolioCardProps {
  text: string;
  url: string;
  img?: string;
  name: string;
  date: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  text,
  url,
  img,
  name,
  date
}) => {
  return (
    <Card className='PortfolioCard' url={url}>
      <figure className='PortfolioCard__ImageArea'>
        <img className='PortfolioCard__Image' src={img} alt='' />
      </figure>
      <h2 className='PortfolioCard__Name'>{name}</h2>
      <h3 className='PortfolioCard__Date'>{date}</h3>
      <p className='PortfolioCard__Text'>{text}</p>
    </Card>
  );
};

export default PortfolioCard;
