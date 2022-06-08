import { useState } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import logoContext from '../context/logoContext'

function MyApp({ Component, pageProps }) {
  const [logo, setLogo] = useState('')

  return (
    <logoContext.Provider value={[logo, setLogo]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </logoContext.Provider>
  )
}

export default MyApp
