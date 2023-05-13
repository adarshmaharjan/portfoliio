import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedinIn } from 'react-icons/fa';
import { SocialMediaIconInterface } from './types';
import SocialMediaIcon from './SocialMediaIcon';

const socialMediaData: SocialMediaIconInterface[] = [
  {
    name: 'github',
    icon: <FaGithubSquare />,
    link: 'https://github.com/adarshmaharjan',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/adarsh-maharjan-ab19ab164/',
  },
  {
    name: 'facebook',
    icon: <FaFacebookSquare />,
    link: 'https://www.facebook.com/adarsh.maharjan',
  },
];
const SocialMediaIconList: React.FC = () => {
  return (
    <div className="flex justify-evenly py-8">
      {socialMediaData.map((item, index) => {
        return <SocialMediaIcon key={index} {...item} />;
      })}
    </div>
  );
};

export default SocialMediaIconList;
