import { AppContextProvider } from '@/AppContext';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <div className="dark:bg-dark-100 dark:text-gray text-dark-800">
        <Component {...pageProps} />
      </div>
    </AppContextProvider>
  );
}

export default MyApp;
