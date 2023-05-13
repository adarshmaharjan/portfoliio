import { ReactNode, useContext } from 'react';
import { GlobalContext } from './GlobalProvider';
import { ThemeContext } from './ThemeProvider';

export type ChildrenPropsType = {
  children: ReactNode;
};
export const useGlobalContext = () => useContext(GlobalContext);
export const useThemeContext = () => useContext(ThemeContext);
