import { createGlobalStyle } from 'styled-components'
import sea from '../../../assets/plaholder-active/sea.png'

const Base = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  html, body, #root {
    cursor: var(--cursor-auto);
    height: 100%;
  }

  body {
    font-family: 'Fira Sans', monospace;
    font-size: 1rem;
    background-image: url(${sea});
    overflow: hidden;
  }
`

export default Base
