import styled, { css, keyframes } from 'styled-components'
import gueio from '../../assets/images/gueio.png'

const idle = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: calc(var(--tile-width) * -4) 0;
  }
`

const flippingForward = keyframes`
  from {
    background-position: 0 calc(var(--tile-height) * -3);
  }
  to {
    background-position: calc(var(--tile-width) * -14) calc(var(--tile-height) * -3);
  }
`

const hasClick = ({ clicked }) => clicked && css`
  animation: ${flippingForward} 1s steps(var(--flipping-forward-steps));
`

const Player = styled.div`
  --tile-height: 27px;
  --tile-width: 23px;
  --idle-steps: 4;
  --flipping-forward-steps: 14;

  width: var(--tile-width);
  height: var(--tile-height);
  background: url(${gueio}) no-repeat;
  background-position: 0 0;
  animation: ${idle} 600ms steps(var(--idle-steps)) infinite;

  position: absolute;
  top: calc(${({ y }) => `var(--tile) * ${y}`});
  left: calc(${({ x }) => `var(--tile) * ${x}`});

  ${hasClick} 
`

export default {
  Player
}
