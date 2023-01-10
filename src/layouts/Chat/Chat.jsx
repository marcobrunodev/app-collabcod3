import ArrowOpenClose from '../../components/ArrowOpenClose'
import Button from '../../components/Button'
import InputText from '../../components/InputText'
import S from './Chat.styles'
import avatar from '../../assets/plaholder-active/avatar.png'
import ChatMessage from '../ChatMessage'
import Title from '../../components/Title'
import { forwardRef } from 'react'

const Chat = forwardRef((props, ref) => (
  <S.Chat isOpen={props.isOpen}>
    <S.Header>
      <Title>FrontEnd</Title>

      <S.WrapperOpenClose isOpen={props.isOpen}>
        <ArrowOpenClose isOpen={props.isOpen} onClick={props.handleToggle} />
      </S.WrapperOpenClose>
    </S.Header>

    <S.Messages>
      <S.Contents onScroll={props.handleScroll} ref={ref}>
        <ChatMessage avatar={avatar}>
          Hi, I'm a chat bubble  Hi, I'm a chat bubble  Hi, I'm a chat bubble
        </ChatMessage>
        <ChatMessage avatar={avatar}>
          Hi
        </ChatMessage>
        <ChatMessage avatar={avatar}>
          Hi, I'm a chat bubble  Hi, I'm a chat bubble  Hi, I'm a chat bubble Hi, I'm a chat bubble  Hi, I'm a chat bubble  Hi, I'm a chat bubble
        </ChatMessage>
        <ChatMessage avatar={avatar}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem repellat, officia molestiae nostrum dolorum adipisci! Repellat assumenda veniam blanditiis animi dolores.
        </ChatMessage>
        <ChatMessage avatar={avatar}>
          Hi, I'm a chat bubble  Hi, I'm a chat bubble  Hi, I'm a chat bubble
        </ChatMessage>
        <ChatMessage avatar={avatar}>
          Hi
        </ChatMessage>
        <ChatMessage avatar={avatar}>
          Hi, I'm a chat bubble  Hi, I'm a chat bubble  Hi, I'm a chat bubble Hi, I'm a chat bubble  Hi, I'm a chat bubble  Hi, I'm a chat bubble
        </ChatMessage>
        <ChatMessage avatar={avatar}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem repellat, officia molestiae nostrum dolorum adipisci! Repellat assumenda veniam blanditiis animi dolores.
        </ChatMessage>
        <ChatMessage avatar={avatar}>
          Hi, I'm a chat bubble  Hi, I'm a chat bubble  Hi, I'm a chat bubble
        </ChatMessage>
        <ChatMessage avatar={avatar}>
          Hi
        </ChatMessage>
        <ChatMessage avatar={avatar}>
          Hi, I'm a chat bubble  Hi, I'm a chat bubble  Hi, I'm a chat bubble Hi, I'm a chat bubble  Hi, I'm a chat bubble  Hi, I'm a chat bubble
        </ChatMessage>
        <ChatMessage avatar={avatar}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem repellat, officia molestiae nostrum dolorum adipisci! Repellat assumenda veniam blanditiis animi dolores.
        </ChatMessage>
      </S.Contents>
      <S.WrapperScroll>
        <S.Scroll scroll={props.scroll} />
      </S.WrapperScroll>
    </S.Messages>

    <S.Form>
      <InputText />

      <Button>Chat</Button>
    </S.Form>
  </S.Chat>
))

export default Chat
