import { createGlobalStyle } from 'styled-components'

const Colors = createGlobalStyle`
  :root {
    --color-first: #F25A70;
    --color-second: #7C5E99;
    --color-third: #FFF;

    --color-black-first: #000;
    --color-black-second: #3A4042;
    --color-black-third: #828282;

    --color-error: #BA1F33;
    --color-warning: #CEB02A;
    --color-success: #62C370;

    --color-text-input: #f3e5c2;
    --color-text-input-focus: #6b4b5b;

    --color-inputs: #6b4b5b;
    --color-background: #dcb98a;
    --color-light-background: #e8cfa6;
    --color-border: #645552;
  }
`

export default Colors
