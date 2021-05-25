import { useEffect } from 'react'
import { analytics } from '../utils/firebase'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import 'highlight.js/styles/darcula.css';
import 'highlight.js/lib/languages/javascript';

function MyApp({ Component, pageProps }) {
  const routers = useRouter()
  useEffect(() => {
    console.log('init analytics')
    console.log(process.env.NEXT_PUBLIC_FB_MEASUREMENTID)
    // if (process.env.NODE_ENV === 'production') {
      const logEvent = (url) => {
        analytics().setCurrentScreen(url)
        analytics().logEvent('screen_view')
      }
      routers.events.on('routeChangeComplete', logEvent)
      logEvent(window.location.pathname)
      return () => {
        routers.events.off('routeChangeComplete', logEvent)
      }

    // }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
