import {Link} from '@/i18n/routing';
import {setRequestLocale, getTranslations} from 'next-intl/server';

export default async function HomePage({
  params
}: {
  params: Promise<{locale: "en" | "cs"}>
}) {

  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('homepage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('link')}</Link>
    </div>
  );
}