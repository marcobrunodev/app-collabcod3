import styled from 'styled-components'
import gram from '../../assets/plaholder-active/gram.png'
import islandBorder from '../../assets/plaholder-active/island-border.png'

const size = (multiply) => multiply && `calc(var(--tile) * ${multiply + 2})`

const Island = styled.div`
  display: inline-flex;
  border: 16px solid transparent;
  justify-content: center;
  align-items: center;
  image-rendering: pixelated;
`

const Floor = styled.article`
  background: url(${gram});
  width: ${({ column }) => size(column)};
  height: ${({ row }) => size(row)};
  border-image: url(${islandBorder}) 16 fill / var(--tile) / var(--tile) space;
  border-width: 16px;
  image-rendering: pixelated;
`

export default {
  Island,
  Floor
}
