import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import { AnimatePresence } from 'framer-motion'
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <AnimatePresence mode='wait'>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
