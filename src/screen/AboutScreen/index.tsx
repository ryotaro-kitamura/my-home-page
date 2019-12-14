import React from "react";
import ryotaro from "../../images/ryotaro_kitamura.jpg";
import Icon from "../../components/atoms/Icon";

const AboutScreen = () => {
  return (
    <div className='AboutScreen'>
      <Icon className='AboutScreen__Icon' url={ryotaro} />
    </div>
  );
};

export default AboutScreen;
