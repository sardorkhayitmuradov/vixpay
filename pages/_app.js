import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import '@/styles/globals.css';
import { NextIntlProvider } from 'next-intl';
// import { appWithTranslation } from 'next-i18next';
// import ModalProvider from "../context/modal";
// import { Provider } from 'react-redux';
// import { store } from '../redux/store';
// import '../styles/globals.css'
// import '../components/Checkbox/check.css'
// import '../components/SaveCheckbox/SaveCheckbox.css'

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
