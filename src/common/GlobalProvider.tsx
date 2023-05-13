import { FC, createContext, useState } from 'react';
import { ChildrenPropsType } from './types';

export type GlobalContextType = {
  darkTheme: boolean;
  toggleDarkTheme: (darkTheme: boolean) => void;
};
export const GlobalContext = createContext<GlobalContextType>({
  darkTheme: false,
  toggleDarkTheme: () => {
    return;
  },
});

export const GlobalProvider: FC<ChildrenPropsType> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  return (
    <GlobalContext.Provider
      value={{
        darkTheme,
        toggleDarkTheme: () => setDarkTheme((prevState) => !prevState),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
