import { string } from 'prop-types'
import S from './ChatBubble.styles'

const ChatBubble = ({ children }) => (
  <S.ChatBubble>
    <S.Content>
      {children}
    </S.Content>
  </S.ChatBubble>
)

ChatBubble.propTypes = {
  children: string.isRequired
}

export default ChatBubble
