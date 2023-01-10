import styled, { css } from 'styled-components'
import Gueio from '../../components/Gueio'

const finishLoading = ({ status }) => !status && css`
  transform: translateY(-120%);

  & > ${Bg} {
    opacity: 0;
    transform: scaleY(0)
  }

  & > ${Gueio} {
    transform: scale(0);
    opacity: 0;
  }
`

const Bg = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  background-color: rgb(0,0,0);
  transition: 200ms 500ms opacity ease-in-out, 500ms transform ease-in-out;
`

const Loading = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms 500ms transform ease-in-out;

  & > ${Gueio} {
    transform: scale(3);
    position: relative;
    z-index: 2000;
    transition: 300ms 200ms opacity ease-in-out, 500ms 300ms transform ease-in-out;
  }

  ${finishLoading};
`

export default { Loading, Bg }
