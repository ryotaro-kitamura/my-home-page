import React from "react";
import Card from "../../atoms/Card";

interface PortfolioCardProps {
  url: string;
  img: string;
  name: string;
  date: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  url,
  img,
  name,
  date
}) => {
  return (
    <Card className='PortfolioCard' url={url}>
      <figure>
        <img className='PortfolioCard__Image' src={img} alt='' />
      </figure>
      <h2 className='PortfolioCard__Name'>{name}</h2>
      <h3 className='PortfolioCard__Date'>{date}</h3>
      <div>
        <p>ここが説明</p>
      </div>
    </Card>
  );
};

export default PortfolioCard;
