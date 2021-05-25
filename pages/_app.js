import { useEffect } from 'react'
import { analytics } from '../utils/firebase'

import '../styles/globals.css'
import 'highlight.js/styles/darcula.css';
import 'highlight.js/lib/languages/javascript';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('init analytics')
    console.log(process.env.NEXT_PUBLIC_FB_MEASUREMENTID)
    // if (process.env.NODE_ENV === 'production') {
      analytics();
    // }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
