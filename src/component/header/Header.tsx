import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="font-body w-full h-[64px] fixed z-10 top-0 left-0 bg-base-100">
      <div className="container mx-auto">
        <nav className="navbar">
          <div className="flex-1">
            <a className="font-header btn btn-ghost normal-case text-2xl">Portfolio</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
