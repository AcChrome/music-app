import '../styles/globals.css'
import { sessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <sessionProvider session={session}>
      <Component {...pageProps} />
    </sessionProvider>
  )
}

export default MyApp
