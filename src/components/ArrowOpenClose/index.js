import styled from 'styled-components'
import arrowOpenClose from '../../assets/plaholder-active/arrow-open-close.png'

const ArrowOpenClose = styled.div`
  width: var(--tile);
  height: var(--tile);
  background: url(${arrowOpenClose}) no-repeat;
  background-position: ${({ isOpen }) => isOpen ? 'calc(var(--tile) * -1) 0' : '0 0'};
  cursor: var(--cursor-pointer);
  transform: scale(2);
  transition: 100ms transform cubic-bezier(.22,-0.03,.94,2.06);

  &:hover {
    transform: scale(2.4) !important;
  }

  &:active {
    transform: scale(3.5) !important;
  }
`

export default ArrowOpenClose
