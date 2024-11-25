import {Link} from '@/i18n/routing';
import {getTranslations, setRequestLocale} from 'next-intl/server';

export default async function About({
  params
}: {
  params: Promise<{locale: "en" | "cs"}>
}) {

  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('about');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/">{t('link')}</Link>
    </div>
  );
}