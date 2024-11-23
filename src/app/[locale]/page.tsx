import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';
import { Box, Typography } from '@mui/material';
 
export default function HomePage({
  params: {locale}
}: {
  params: {locale: "en" | "cs"}
}) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('homepage');
  return (
    <Box>
      <Typography variant='h1'>{t('title')}</Typography>
      <Link href="/about">{t('link')}</Link>
    </Box>
  );
}