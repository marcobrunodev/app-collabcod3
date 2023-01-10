import styled, { css } from 'styled-components'
import scroll from '../../assets/plaholder-active/scroll.png'

const WrapperOpenClose = styled.div`
    transform: translateX(calc(100% + var(--tile) * 2));
    transition: transform 400ms 300ms ease-in-out;
    
    ${({ isOpen }) => isOpen && css`
      transform: translateX(0);
      transition: transform 100ms 0 ease-in-out;
    `}
`

const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  padding: var(--tile);
  border-bottom: 0.3rem solid var(--color-border);
  display: flex;
  justify-content: space-between;
  background-color: var(--color-background);
  color: var(--color-inputs);
  height: var(--height-header);
`

const Scroll = styled.img.attrs({ src: scroll })`
  width: 100%;
  transform: translateY(calc((var(--height-messages) - 100%) * ${({ scroll }) => scroll}));
`

const WrapperScroll = styled.div`
  margin-top: var(--gap);
  width: var(--width-scroll);
  height: var(--height-messages);
`

const Contents = styled.div`
  height: var(--height-messages);
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  scrollbar-color: transparent;
  width: calc(100% - (var(--width-scroll) + var(--gap)));
  padding: var(--gap) 0;

  &::-webkit-scrollbar {
    width: 0;
  }
`

const Messages = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
  padding: 0 var(--gap);
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: var(--height-form);
  gap: calc(var(--tile) / 2);
  padding: 0 var(--gap);
`

const Chat = styled.article`
  --gap: 0.8rem;
  --height-header: 5.2rem;
  --height-form: 10rem;
  --height-messages: calc(100vh - (var(--height-header) + var(--height-form) +  var(--gap) * 4));
  --width-scroll: 1rem;

  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(32rem + var(--tile) * 2);
  border-right: 0.4rem solid var(--color-border);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--color-background);
  transform: translateX(-100%);
  transition: transform 400ms 100ms ease-in-out;
  padding-bottom: var(--gap);

  ${({ isOpen }) => isOpen && css`
    transform: translateX(0);
    transition: transform 400ms 0 ease-in-out;
  `}
`

export default {
  Chat,
  Form,
  WrapperOpenClose,
  Header,
  Messages,
  WrapperScroll,
  Scroll,
  Contents
}
