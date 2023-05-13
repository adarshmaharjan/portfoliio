import React from 'react';
import { ChildrenPropsType } from '../types';

const SectionWrapper: React.FC<ChildrenPropsType> = ({ children }) => {
  return <section className="min-h-[calc(100vh-64px)]">{children}</section>;
};

export default SectionWrapper;
