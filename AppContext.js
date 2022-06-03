import {
  createContext, useContext, useEffect, useState,
} from 'react';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    let { theme } = localStorage;

    if (!theme) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'dark';
      } else {
        theme = 'light';
      }
    }

    setState((prevState) => ({ ...prevState, menuOpen: false, theme }));
  }, []);

  useEffect(() => {
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { state, setState };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// context consumer hook
const useAppContext = () => {
  // get the context
  const context = useContext(AppContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useAppContext was used outside of its Provider');
  }

  return context;
};

export { useAppContext, AppContextProvider };
