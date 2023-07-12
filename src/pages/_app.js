import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
