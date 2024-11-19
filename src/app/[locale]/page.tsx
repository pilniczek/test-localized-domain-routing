import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('homepage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('link')}</Link>
    </div>
  );
}