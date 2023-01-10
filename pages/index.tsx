import { Inter } from '@next/font/google'
import React from 'react'
import App from '../src/components/app'

import '../src/i18n/i18n'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <React.StrictMode>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </React.StrictMode>
  )
}
