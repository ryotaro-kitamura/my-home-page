import React from "react";

interface CardProps {
  url: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ url, children }) => {
  return (
    <div>
      <a href={url}>{children}</a>
    </div>
  );
};

export default Card;
