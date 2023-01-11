import { useEffect, useState } from 'react'

const useLoading = () => {
  const [status, setStatus] = useState(true)
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      setVisibility(true)
      setStatus(true)
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(false)
      setVisibility(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [visibility])

  return {
    status,
    visibility
  }
}

export default useLoading
