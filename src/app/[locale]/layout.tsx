import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { use } from 'react'

const theme = createTheme({});
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: "en" | "cs"};
}) {
  const { locale } = use(params)

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
 
  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </ThemeProvider>
    </html>
  );
}