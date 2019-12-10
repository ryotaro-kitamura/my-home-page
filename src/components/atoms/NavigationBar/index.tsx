import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ryotaro from "../../../images/ryotaro_kitamura.jpg";

const myIcon = ryotaro;
const homeIcon = <FontAwesomeIcon icon={["fas", "home"]} />;
const aboutIcon = <FontAwesomeIcon icon={["far", "address-card"]} />;
const portfolioIcon = <FontAwesomeIcon icon={["fas", "palette"]} />;

const NavigationBar = () => {
  return (
    <div className='Global__NavigationBar'>
      <div className='Global__NavigationBar__IconArea'>
        <img className='Global__NavigationBar__Icon' src={myIcon} alt='' />
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
