import React, { useState } from 'react';
import { GlobalContext } from './common/context/GlobalProvider';
import Header from './component/header/Header';
import { ThemeProvider } from './common/context/ThemeProvider';
import Banner from './component/banner/Banner';
import About from './component/about/About';
import Services from './component/services/Services';
import Footer from './component/footer/Footer';

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
            <About />
            <Services />
          </main>
          <Footer />
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
