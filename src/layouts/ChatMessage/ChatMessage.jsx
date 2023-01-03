import { string } from 'prop-types'
import Avatar from '../../components/Avatar'
import ChatBubble from '../../components/ChatBubble'
import S from './ChatMessage.styles'

const ChatMessage = ({ avatar, children }) => (
  <S.ChatMessage>
    <Avatar src={avatar} />
    <ChatBubble>
      {children}
    </ChatBubble>
  </S.ChatMessage>
)

ChatMessage.propTypes = {
  avatar: string.isRequired,
  children: string.isRequired
}

export default ChatMessage
