import '../public/style.css'
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
export { reportWebVitals } from 'next-axiom';
import { Analytics } from '@vercel/analytics/react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ee5035'
      }
  },
  typography: {
    fontFamily: [
      'Inter',
      'Montserrat',
      'sans-serif'
    ].join(','),
  }
});
import '../public/main.css'

export default function Nextra({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', 'dark')
  }
  useEffect(() => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
  }, [theme])


  const getLayout = Component.getLayout || (page => page)
  return getLayout(
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} 
        />
        <Analytics />
      </ThemeProvider>
)
}
