import React from 'react';
import { Portfolio } from '../../../screen/PortFolioScreen/types';
import Card from '../../atoms/Card';

const PortfolioCard: React.FC<Partial<Portfolio>> = ({
  text,
  url,
  img,
  name,
  date
}) => {
  return (
    <Card className="PortfolioCard" url={url}>
      <figure className="PortfolioCard__ImageArea">
        <img className="PortfolioCard__Image" src={img} alt="" />
      </figure>
      <h2 className="PortfolioCard__Name">{name}</h2>

      <label>
        Period: <p className="PortfolioCard__Date">{date}</p>
      </label>
      <label>
        Description: <p className="PortfolioCard__Text">{text}</p>
      </label>
      <label>
        Link:
        <p className="PortfolioCard__Text link">
          <a className="PortfolioCard__Text link" href={url}>
            {url}
          </a>
        </p>
      </label>
    </Card>
  );
};

export default PortfolioCard;
