import { useEffect, useState } from 'react'

const useDetectBrowser = () => {
  const [browser, setBrowser] = useState('')

  useEffect(() => {
    const ua = navigator.userAgent
    if (ua.indexOf('Chrome') > 0) {
      setBrowser('Chrome')
    } else if (ua.indexOf('Safari') > 0) {
      setBrowser('Safari')
    } else if (ua.indexOf('Firefox') > 0) {
      setBrowser('Firefox')
    } else if (ua.indexOf('MSIE') > 0 || ua.indexOf('Trident') > 0) {
      setBrowser('IE')
    } else {
      setBrowser('unknown')
    }
  }, [])

  return browser
}

export default useDetectBrowser
