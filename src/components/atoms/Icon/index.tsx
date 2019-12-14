import React from "react";

interface IconProps {
  className: string;
  url: string;
}

const Icon: React.FC<IconProps> = ({ className, url }) => {
  return <img className={className + " Icon"} src={url} alt='' />;
};

export default Icon;
