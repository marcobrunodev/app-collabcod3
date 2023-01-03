import { useState } from 'react'

const useChat = () => {
  const storageOpen = !!localStorage.getItem('chatOpen')
  const [open, setOpen] = useState(storageOpen)

  const toggle = () => {
    setOpen(() => {
      const newOpen = !open
      console.log(newOpen)
      localStorage.setItem('chatOpen', newOpen)
      return newOpen
    })
  }

  return {
    open,
    toggle
  }
}

export default useChat
