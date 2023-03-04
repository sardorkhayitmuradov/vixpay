import {useTranslations} from 'next-intl';
import { useRouter } from 'next/router';
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const t = useTranslations('Index');
  const router = useRouter()
  console.log(router)
  return (
    <main>
        <h1>{t('title')}</h1>
    </main>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}