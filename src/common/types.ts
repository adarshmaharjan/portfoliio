import { ReactNode, useContext } from 'react';
import { GlobalContext } from './context/GlobalProvider';
import { ThemeContext } from './context/ThemeProvider';

export type ChildrenPropsType = {
  children: ReactNode;
};
export const useGlobalContext = () => useContext(GlobalContext);
export const useThemeContext = () => useContext(ThemeContext);
