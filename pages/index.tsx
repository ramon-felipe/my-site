import { Inter } from '@next/font/google'
import i18next from 'i18next'
import moment from 'moment'
import React, { useEffect } from 'react'
import App from '../src/components/app'

import '../src/i18n/i18n'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    moment.locale(i18next.language);
  }, [])

  return (
    <React.StrictMode>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </React.StrictMode>
  )
}
