import React from 'react';
import { Link } from 'react-scroll';

const Navigation: React.FC = () => {
  const offsetValue = -64;
  const scrollDuration = 400;
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={offsetValue} duration={scrollDuration}>
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={offsetValue} duration={scrollDuration}>
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={offsetValue}
            duration={scrollDuration}
          >
            Services
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
