import Chat from './Chat'
import useChat from './useChat'

export default () => {
  const { open, toggle, handleScroll, scroll } = useChat()

  return <Chat
            isOpen={open}
            handleToggle={toggle}
            handleScroll={handleScroll}
            scroll={scroll}
          />
}
