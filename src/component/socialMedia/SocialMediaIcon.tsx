import React, { ReactNode } from 'react';
import {} from 'react-router-dom';
import { SocialMediaIconInterface } from './types';
import { IconContext } from 'react-icons';

const SocialMediaIcon: React.FC<SocialMediaIconInterface> = ({ name, link, icon }) => {
  return (
    <IconContext.Provider
      value={{
        size: '20',
      }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="inline-block p-3 rounded hover:bg-black hover:bg-opacity-10 transition-all ease-in-out duration-300"
      >
        {icon}
      </a>
    </IconContext.Provider>
  );
};

export default SocialMediaIcon;
