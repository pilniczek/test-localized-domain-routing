import {Link} from '@/i18n/routing';
import {setRequestLocale, getTranslations} from 'next-intl/server';
import { Box, Typography } from '@mui/material';
import AccordionDummy from '@/components/dummy/Accordion';

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
    <Box>
      <Typography variant="h1">{t('title')}</Typography>
      <Link href="/about">{t('link')}</Link>
      <AccordionDummy />
    </Box>
  );
}