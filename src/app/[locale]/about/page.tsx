import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';
import { Box, Typography } from '@mui/material';

export default function About({
  params: {locale}
}: {
  params: {locale: "en" | "cs"}
}) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('about');
  return (
    <Box>
      <Typography variant='h1'>{t('title')}</Typography>
      <Link href="/">{t('link')}</Link>
    </Box>
  );
}