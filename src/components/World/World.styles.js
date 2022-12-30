import styled, { keyframes } from 'styled-components'
import watter from '../../assets/plaholder-active/water.png'

const seaAnimation = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 2px 0;
  }
`

const World = styled.main`
  transform-origin: center center;
  transform: scale(${({ zoom }) => zoom});
  transition: 100ms transform linear;
  background-image: url(${watter});
  height: 100%;
  animation: 1s steps(4) infinite alternate ${seaAnimation};
  image-rendering: pixelated;
`

export default {
  World
}
