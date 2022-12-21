import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  html, body, #root {
    cursor: var(--cursor-auto);
    min-height: 100%;
  }

  body {
    font-family: 'Fira Sans', monospace;
    font-size: 1rem;
  }
`

export default Base
