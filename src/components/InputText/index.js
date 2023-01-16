import styled from 'styled-components'
import input from '../../assets/plaholder-active/input.png'
import inputFocus from '../../assets/plaholder-active/input-focus.png'
import pulse from '../../GlobalStyles/tools/animation/pulse'

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
    animation: 100ms ease-in-out ${pulse()};
    color: var(--color-text-input-focus);
  }
`

export default InputText
