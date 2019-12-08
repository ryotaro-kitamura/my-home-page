import React from "react";
import Card from "../../atoms/Card";

interface PortfolioCardProps {
  url: string;
  name: string;
  date: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ url, name, date }) => {
  return (
    <Card url={url}>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <div>
        <p>ここが説明</p>
      </div>
    </Card>
  );
};

export default PortfolioCard;
