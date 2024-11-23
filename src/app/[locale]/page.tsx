import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';
 
export default function HomePage({
  params: {locale}
}: {
  params: {locale: "en" | "cs"}
}) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('homepage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('link')}</Link>
    </div>
  );
}