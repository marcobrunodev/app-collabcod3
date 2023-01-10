import { useEffect, useRef, useState } from 'react'

const useChat = () => {
  const chatElement = useRef(false)
  const storageOpen = localStorage.getItem('chatOpen') === 'true'
  const [open, setOpen] = useState(storageOpen)
  const [scroll, setScroll] = useState(1)

  useEffect(() => {
    if (chatElement.current) {
      const allHeight = chatElement.current.scrollHeight
      const showHeight = chatElement.current.offsetHeight
      const heightScroll = allHeight - showHeight

      console.log('currentPositionScroll / heightScroll', heightScroll)

      chatElement.current.scrollTo(0, heightScroll)
    }
  }, [])

  const toggle = () => {
    setOpen((oldOpen) => {
      const newOpen = !oldOpen
      localStorage.setItem('chatOpen', newOpen)

      return newOpen
    })
  }

  const handleScroll = ({ target }) => {
    const currentPositionScroll = target.scrollTop
    const allHeight = target.scrollHeight
    const showHeight = target.offsetHeight
    const heightScroll = allHeight - showHeight

    setScroll(currentPositionScroll / heightScroll)
  }

  return {
    open,
    toggle,
    handleScroll,
    scroll,
    chatElement
  }
}

export default useChat
