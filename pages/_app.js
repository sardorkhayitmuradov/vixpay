import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import { NextIntlProvider } from 'next-intl';
import '../styles/globals.css';
import { useTina } from 'tinacms/dist/react';


function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === '/404') return <Component {...pageProps} />;

  return (
    <>
      <NextSeo
        title='VIXPAY'
        titleTemplate='VIXPAY'
        description='VIXPAY e-website'
      />
      <NextIntlProvider locale={router.locale} messages={pageProps.messages}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextIntlProvider>
    </>
  );
}

export default App;
