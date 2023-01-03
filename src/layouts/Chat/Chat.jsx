import { bool, func } from 'prop-types'
import ArrowOpenClose from '../../components/ArrowOpenClose'
import Button from '../../components/Button'
import InputText from '../../components/InputText'
import S from './Chat.styles'

const Chat = ({ isOpen, handleToggle }) => (
  <S.Chat isOpen={isOpen}>
    <S.WrapperOpenClose isOpen={isOpen}>
      <ArrowOpenClose isOpen={isOpen} onClick={handleToggle} />
    </S.WrapperOpenClose>

    <S.Form>
      <InputText />

      <Button>Chat</Button>
    </S.Form>
  </S.Chat>
)

Chat.propTypes = {
  isOpen: bool.isRequired,
  handleToggle: func.isRequired
}

export default Chat
