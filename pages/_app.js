import '../public/style.css'
import '../public/main.css'
import { useState, useEffect } from 'react'

export default function Nextra({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    localStorage.setItem('theme', 'dark')
  }, [theme])

  const getLayout = Component.getLayout || (page => page)
  return getLayout(<Component {...pageProps} />)
}
