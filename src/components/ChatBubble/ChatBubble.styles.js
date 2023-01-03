import styled from 'styled-components'
import chatBubbleBorder from '../../assets/plaholder-active/chat-bubble-border.png'

const Content = styled.p` 
  --size-border: 1rem;

  box-sizing: border-box;
  position: relative;
  font-size: 1rem;
  line-height: 1.5;
  font-family: 'Press Start 2P', sans-serif;
  width: 100%;
  min-height: 1em;
  border-image: url(${chatBubbleBorder}) 4 fill / var(--size-border) / var(--size-border);
  background-color: var(--color-light-background);
`

const ChatBubble = styled.div`
  border: 1rem solid transparent;
`

export default {
  ChatBubble,
  Content
}
