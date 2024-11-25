import {Link} from '@/i18n/routing';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import { Box, Typography } from '@mui/material';

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
    <Box>
      <Typography variant="h1">{t('title')}</Typography>
      <Link href="/">{t('link')}</Link>
    </Box>
  );
}