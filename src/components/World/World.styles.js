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

const Menu = styled.nav`
  position: fixed;
  bottom: var(--tile);
  right: var(--tile);
`

const Camera = styled.div`
  transform: scale(${({ zoom }) => zoom});
  transition: 500ms transform linear;
  filter: blur(${({ blur }) => `${blur}px`});
  background-image: url(${watter});
  width: 100vw;
  height: 100vh;
  animation: 1s steps(4) infinite alternate ${seaAnimation};
  will-change: transform;
`

const World = styled.main`
  position: relative;
`

export default {
  World,
  Camera,
  Menu
}
