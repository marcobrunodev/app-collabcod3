import { useState } from 'react'

const useChat = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return {
    open,
    toggle
  }
}

export default useChat
