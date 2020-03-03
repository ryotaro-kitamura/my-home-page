import React from "react";

interface TextProps {
  fontSize?: "large" | "normal";
  fontColor?: "alert" | "normal";
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ fontSize, fontColor, children }) => {
  const fontSizeModifier = fontSize ? "size-large" : "size-normal";
  const fontColorModifier = fontColor ? "color-alert" : "color-normal";
  return (
    <p className={`Text ${fontSizeModifier} ${fontColorModifier}`}>
      {children}
    </p>
  );
};

export default Text;
