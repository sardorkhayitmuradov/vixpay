import {useTranslations} from 'next-intl';
import { useRouter } from 'next/router';

export default function Home() {
  const t = useTranslations('Index');
  const router = useRouter()
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