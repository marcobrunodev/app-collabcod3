import styled, { css, keyframes } from 'styled-components'
import water0 from '../../assets/plaholder-active/water/water0.png'
import waterSheet from './waterSheet'

const steps = () => waterSheet.map((waterSheet, index) => css`${4.54 * index}% {
  background-image: url(${waterSheet});
}`)

const seaAnimation = keyframes`
  ${steps()}
`

const Menu = styled.nav`
  position: sticky;
  padding: 0 var(--tile);
  bottom: var(--tile);
  display: flex;
  justify-content: flex-end;
`

const Camera = styled.div`
  transform: scale(${({ zoom }) => zoom});
  transition: 500ms transform linear;
  filter: blur(${({ blur }) => `${blur}px`});
  background-image: url(${water0});
  width: 100vw;
  height: 100vh;
  animation: 3.5s linear infinite alternate ${seaAnimation};
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
