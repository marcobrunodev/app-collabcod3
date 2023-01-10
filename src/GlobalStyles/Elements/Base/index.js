import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  html, body, #root {
    cursor: var(--cursor-auto);
    height: 100vh;
    overflow: hidden;
  }

  body {
    font-family: 'Press Start 2P', sans-serif;
    font-size: 1rem;
  }
`

export default Base
