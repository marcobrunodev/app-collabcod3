import styled from 'styled-components'
import iconButtons from '../../assets/plaholder-active/icon-buttons.png'
import icons from './icons'

const IconButton = styled.button`
  height: var(--tile-icon-button);
  width: var(--tile-icon-button);
  background: url(${iconButtons}) no-repeat;
  cursor: var(--cursor-pointer);
  transition: 100ms transform cubic-bezier(.22,-0.03,.94,2.06);
  
  ${({ whatIcon }) => icons[whatIcon]};

  &:hover {
    transform: scale(1.4);
  }
`

export default IconButton
