import styled, { css, keyframes } from 'styled-components'
import water0 from '../../assets/plaholder-active/water/water0.png'
import pulse from '../../GlobalStyles/tools/animation/pulse'
import waterSheet from './waterSheet'

const steps = () => waterSheet.map((waterSheet, index) => css`${4.54 * index}% {
  background-image: url(${waterSheet});
}`)

const seaAnimation = keyframes`
  ${steps()}
`

const WrapperAvatar = styled.div`
  --scale: 1.5;

  will-change: transform;
  position: absolute;
  top: var(--tile);
  right: var(--tile);
  transform: scale(var(--scale));
  transition: transform 80ms ease-in-out;
  
  &:hover {
    cursor: var(--cursor-pointer);
    transform: scale(calc(var(--scale) + 0.1))
  } 
`

const Menu = styled.nav`
  position: absolute;
  bottom: var(--tile);
  right: var(--tile);
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
  Menu,
  WrapperAvatar
}
