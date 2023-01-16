import { keyframes } from 'styled-components'

const pulse = (initialScale = 1, plusScale = 0.1) => keyframes`
  0% {
    transform: scale(${initialScale});
  }
  50% {
    transform: scale(calc(${initialScale} + ${plusScale}));
  }
  100% {
    transform: scale(${initialScale});
  }
`

export default pulse
