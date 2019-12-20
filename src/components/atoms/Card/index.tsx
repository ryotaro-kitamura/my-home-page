import React from "react";

interface CardProps {
  className?: string;
  url?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, url, children }) => {
  return (
    <div className={className + " Card"}>
      {url ? (
        <a className='Card__Link' href={url ? url : ""}>
          {children}
        </a>
      ) : (
        children
      )}
    </div>
  );
};

export default Card;
