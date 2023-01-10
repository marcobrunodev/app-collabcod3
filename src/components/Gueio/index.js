import styled, { keyframes } from 'styled-components'
import gueio from '../../assets/plaholder-active/gueio.png'

const gueioAnimation = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: calc(var(--tile-gueio) * -36) 0;
  }
`

const Gueio = styled.div`
  --tile-gueio: 64px;

  background: url(${gueio}) no-repeat;
  background-position: 0 0;
  animation: 4s steps(36) ${gueioAnimation} infinite !important;
  width: var(--tile-gueio);
  height: var(--tile-gueio);
`

export default Gueio
