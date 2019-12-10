import React from "react";

interface ButtonProps {
  url: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ url, children }) => {
  const ToLinkPage = (link: string) => {
    return (window.location.href = `${link}`);
  };
  return (
    <button onClick={() => ToLinkPage(url)} className='Button'>
      {children}
    </button>
  );
};

export default Button;
