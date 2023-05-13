import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full h-[64px] fixed z-10 top-0 left-0 bg-base-100">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-2xl">Portfolio</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
