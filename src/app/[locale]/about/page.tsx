import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';

export default function About({
  params: {locale}
}: {
  params: {locale: "en" | "cs"}
}) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('about');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/">{t('link')}</Link>
    </div>
  );
}