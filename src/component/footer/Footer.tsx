import React from 'react';
import SocialMediaIconList from '../socialMedia/SocialMediaIconList';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <SocialMediaIconList/>
        <p>Copyright © {new Date().getFullYear().toString()} - All right reserved by Adarsh Maharjan</p>
      </div>
    </footer>
  );
};

export default Footer;
