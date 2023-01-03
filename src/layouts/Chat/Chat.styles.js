import styled, { css } from 'styled-components'

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: calc(var(--tile) / 2);
`

const WrapperOpenClose = styled.div`
    position: absolute;
    top: var(--tile);
    right: var(--tile);
    transform: translateX(calc(100% + var(--tile) * 2));
    transition: transform 400ms 300ms ease-in-out;

    ${({ isOpen }) => isOpen && css`
      transform: translateX(0);
      transition: transform 100ms 0 ease-in-out;
    `}
`

const Chat = styled.article`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(30rem + var(--tile) * 2);
  border-right: 0.4rem solid var(--color-border);
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: var(--tile);
  background-color: var(--color-background);
  transform: translateX(-100%);
  transition: transform 400ms 100ms ease-in-out;

  ${({ isOpen }) => isOpen && css`
    transform: translateX(0);
    transition: transform 400ms 0 ease-in-out;
  `}
`

export default {
  Chat,
  Form,
  WrapperOpenClose
}
