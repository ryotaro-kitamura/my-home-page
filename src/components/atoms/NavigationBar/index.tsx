import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const aboutIcon = <FontAwesomeIcon icon={["far", "address-card"]} />;
const portfolioIcon = <FontAwesomeIcon icon={["fas", "palette"]} />;

const NavigationBar = () => {
  return (
    <div className='Global__NavigationBar'>
      <ul className='Global__NavigationBar__Lists'>
        <li className='Global__NavigationBar__List'>
          <Link to='/'>
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
