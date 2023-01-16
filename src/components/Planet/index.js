import styled, { keyframes } from 'styled-components'
import lava from '../../assets/plaholder-active/lava.png'
import baren from '../../assets/plaholder-active/baren.png'
import ice from '../../assets/plaholder-active/ice.png'
import terran from '../../assets/plaholder-active/terran.png'

const planets = {
  lava,
  baren,
  ice,
  terran
}

const rotation = keyframes`
  from {
    transform: rotate(0) scale(var(--scale));
  }
  to {
    transform: rotate(360deg) scale(var(--scale));
  }
`

const Planet = styled.img.attrs(({ what }) => ({
  src: planets[what],
  className: what
}))`
  --scale: ${({ scale }) => scale || 1}; 

  width: 15rem;
  transform: rotate(0) scale(var(--scale));
  animation: 10s ${rotation} linear infinite;
`

export default Planet
