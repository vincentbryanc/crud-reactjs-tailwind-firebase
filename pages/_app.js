// import 'tailwindcss/tailwind.css'
import '@/styles/styles.css'
import { AuthProvider } from '../Auth'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
