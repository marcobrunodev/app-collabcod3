import styled from 'styled-components'
import islandBorder from '../../assets/plaholder-active/island-border.png'
import island from '../../assets/plaholder-active/island.png'
import Tile from '../Tile'

const size = (multiply) => multiply && `calc(var(--tile) * ${multiply})`

const TileFloor = styled(Tile)`
  background: url(${island}) no-repeat;
  background-position: calc(var(--tile) * -1) calc(var(--tile) * -1);
`

const Floor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ column }) => size(column)};
  height: ${({ row }) => size(row)};
  border-image: url(${islandBorder}) 16 fill / var(--tile) / var(--tile) space;
  border-width: var(--tile);
  flex-wrap: wrap;
  position: relative;
`

const SquareIsland = styled.article`
  display: inline-flex;
  border: var(--tile) solid transparent;
  will-change: transform;
`

export default {
  SquareIsland,
  Floor,
  TileFloor
}
