import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../Icon";

const myIcon =
  "https://ryotaro-blog.xyz/wp-content/uploads/2019/06/ryotaro-blog-favicon.jpg";
const homeIcon = <FontAwesomeIcon icon={["fas", "home"]} />;
const aboutIcon = <FontAwesomeIcon icon={["far", "address-card"]} />;
const portfolioIcon = <FontAwesomeIcon icon={["fas", "palette"]} />;

const NavigationBar = () => {
  return (
    <div className='Global__NavigationBar'>
      <div className='Global__NavigationBar__IconArea'>
        <Icon className='Global__NavigationBar__Icon' url={myIcon} />
      </div>
      <ul className='Global__NavigationBar__Lists'>
        <li className='Global__NavigationBar__List'>
          <Link to='/'>
            {homeIcon}
            <p>Home</p>
          </Link>
        </li>
        <li className='Global__NavigationBar__List'>
          <Link to='/about'>
            {aboutIcon}
            <p>About</p>
          </Link>
        </li>
        <li className='Global__NavigationBar__List'>
          <Link to='/portfolios'>
            {portfolioIcon}
            <p>PortFolios</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
