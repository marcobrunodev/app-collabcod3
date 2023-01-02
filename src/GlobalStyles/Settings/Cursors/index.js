import { createGlobalStyle } from 'styled-components'
import auto from '../../../assets/plaholder-active/cursors/auto.png'
import pointer from '../../../assets/plaholder-active/cursors/pointer.png'

const Cursors = createGlobalStyle`
  :root {
    --cursor-auto: url(${auto}), auto;
    --cursor-pointer: url(${pointer}) 14 0,pointer;
  }
`

export default Cursors
