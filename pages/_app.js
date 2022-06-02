import { AppContextProvider } from '../AppContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <div className="dark:bg-dark dark:text-light">
        <Component {...pageProps} />
      </div>
    </AppContextProvider>
  );
}

export default MyApp;
