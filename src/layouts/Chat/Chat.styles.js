import styled from 'styled-components'

const Chat = styled.article`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(30rem + var(--tile) * 2);
  border-right: 2px solid var(--color-black-first);
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: var(--tile);
`

export default {
  Chat
}
