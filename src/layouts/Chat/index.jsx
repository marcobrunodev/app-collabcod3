import Chat from './Chat'
import useChat from './useChat'

export default () => {
  const { open, toggle } = useChat()

  return <Chat
            isOpen={open}
            handleToggle={toggle}
          />
}
