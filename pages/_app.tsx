import { AppProps } from 'next/app'
import { Suspense } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<></>}>
      <Component {...pageProps} />
    </Suspense>
  )
}

export default MyApp
