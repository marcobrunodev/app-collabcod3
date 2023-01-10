import Chat from './Chat'
import useChat from './useChat'

export default () => {
  const { open, toggle, handleScroll, scroll, chatElement } = useChat()

  return <Chat
            ref={chatElement}
            isOpen={open}
            handleToggle={toggle}
            handleScroll={handleScroll}
            scroll={scroll}
          />
}
