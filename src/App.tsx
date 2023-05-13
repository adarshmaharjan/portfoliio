import React, { useState } from 'react';
import { GlobalContext } from './common/GlobalProvider';
import Header from './component/header/Header';
import { ThemeProvider } from './common/ThemeProvider';
import Banner from './component/banner/Banner';

const App: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <>
      <GlobalContext.Provider
        value={{
          darkTheme,
          toggleDarkTheme: () => setDarkTheme(!darkTheme),
        }}
      >
        <ThemeProvider>
          <Header />
          <main className="mt-16 font-body">
            <Banner />
          </main>
          <footer></footer>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
