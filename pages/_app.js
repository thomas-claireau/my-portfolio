import { AppContextProvider, useAppContext } from '@/AppContext';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
