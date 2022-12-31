import styled, { keyframes } from 'styled-components'
import cat from '../../assets/plaholder-active/cat.png'

const idle = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: calc(var(--tile) * -2) 0;
  }  
`

const Cat = styled.div`
  position: absolute;
  top: calc(${({ y }) => `var(--tile) * ${y}`});
  left: calc(${({ x }) => `var(--tile) * ${x}`});
  width: var(--tile);
  height: var(--tile);
  background: url(${cat}) no-repeat;
  background-position: 0 0;
  animation: 500ms steps(2) infinite alternate ${idle};
`

export default Cat
