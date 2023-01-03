import styled, { keyframes } from 'styled-components'
import input from '../../assets/plaholder-active/input.png'
import inputFocus from '../../assets/plaholder-active/input-focus.png'

const focus = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

const InputText = styled.input`
  background: url(${input}) no-repeat;  
  background-size: 100% 100%;
  width: 100%;
  height: 5rem;
  padding: var(--tile);
  box-sizing: border-box;
  transition: background-image 100ms ease-in-out;
  font-family: 'Press Start 2P', sans-serif;
  font-size: 1rem;
  color: var(--color-text-input);
  transition: 100ms color ease-in-out;
  cursor: var(--cursor-pointer);

  &:focus {
    background-image: url(${inputFocus});
    animation: 100ms ease-in-out ${focus};
    color: var(--color-text-input-focus);
  }
`

export default InputText
