import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { Box, Typography } from '@mui/material';

export default function HomePage() {
  const t = useTranslations('homepage');
  return (
    <Box>
      <Typography variant='h1'>{t('title')}</Typography>
      <Link href="/about">{t('link')}</Link>
    </Box>
  );
}