import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {NextIntlClientProvider, hasLocale} from 'next-intl'
import {setRequestLocale, getMessages, getLocale} from 'next-intl/server'
import {routing} from '@/i18n/routing'
import '../globals.css'
import Header from '@/components/Header'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Internacional',
  description: 'Proyecto Next.js con next-intl'
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;           // 👈 IMPORTANTE: await
  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)

  const messages = await getMessages()
  const currentLocale = await getLocale()

  return (
    <html lang={currentLocale}>
      <body>
        <NextIntlClientProvider locale={currentLocale} messages={messages}>
          <Header />
          <main>{children}</main>
          <ThemeToggle />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}