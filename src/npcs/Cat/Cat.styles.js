import styled, { keyframes } from 'styled-components'
import cat from '../../assets/plaholder-active/cat.png'

const idle = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: calc(var(--tile-npc) * -7) 0;
  }  
`

const Cat = styled.div`
  position: absolute;
  top: calc(${({ y }) => `var(--tile) * ${y}`});
  left: calc(${({ x }) => `var(--tile) * ${x}`});
  width: var(--tile-npc);
  height: var(--tile-npc);
  background: url(${cat}) no-repeat;
  animation: 1s steps(7) infinite ${idle};
`

export default Cat
