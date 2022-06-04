import { AppContextProvider, useAppContext } from '@/AppContext';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const locales = router?.locales;
  const locale = router?.locale;

  const langs = locales.filter((lang) => lang !== locale);

  return (
    <AppContextProvider>
      <Head>
        {langs.map((lang) => <link key={lang} rel="alternate" hrefLang={lang} href={`/${lang}`} />)}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
