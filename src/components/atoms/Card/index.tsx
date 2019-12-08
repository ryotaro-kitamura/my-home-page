import React from "react";

interface CardProps {
  className: string;
  url: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, url, children }) => {
  return (
    <div className={className + " Card"}>
      <a className='Card__Link' href={url}>
        {children}
      </a>
    </div>
  );
};

export default Card;
