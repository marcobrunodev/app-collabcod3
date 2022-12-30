import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  * {
    will-change: transform;
  }

  html, body, #root {
    cursor: var(--cursor-auto);
    height: 100%;
  }

  body {
    font-family: 'Fira Sans', monospace;
    font-size: 1rem;
    overflow: hidden;
  }
`

export default Base
