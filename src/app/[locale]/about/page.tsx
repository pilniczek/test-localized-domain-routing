import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { Box, Typography } from '@mui/material';

export default function About() {
  const t = useTranslations('about');
  return (
    <Box>
      <Typography variant='h1'>{t('title')}</Typography>
      <Link href="/">{t('link')}</Link>
    </Box>
  );
}