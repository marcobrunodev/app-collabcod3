import styled from 'styled-components'
import button from '../../assets/plaholder-active/button.png'

const Button = styled.button`
  box-sizing: border-box;
  background: url(${button}) no-repeat;
  background-size: 100% 100%;
  width: 7.3rem;
  height: 4rem;
  padding-bottom: 0.4rem;
  font-family: 'Press Start 2P', sans-serif;
  font-size: 0.9rem;
  color: var(--color-inputs);
  cursor: var(--cursor-pointer);
  margin-left: auto;
  transition: 100ms transform cubic-bezier(.22,-0.03,.94,2.06);

  &:hover {
    transform: scale(1.08);
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(1.2);
  }
`

export default Button
