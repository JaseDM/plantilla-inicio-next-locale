// src/app/[locale]/page.tsx
import {useTranslations} from 'next-intl'

export default function HomePage() {
  const t = useTranslations('HomePage')

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 
                     bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="max-w-xl text-center text-lg">
        {t('description')}
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow">
          <h2 className="text-xl font-semibold">Card 1</h2>
          <p>Este es un bloque con `bg-white` que en modo oscuro pasa a `bg-gray-800`.</p>
        </div>
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow">
          <h2 className="text-xl font-semibold">Card 2</h2>
          <p>Igual que el anterior, para ver el contraste.</p>
        </div>
      </div>

      <button className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 
                         dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300 transition">
        {t('cta')}
      </button>
    </main>
  )
}