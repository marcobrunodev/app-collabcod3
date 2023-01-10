import styled, { css, keyframes } from 'styled-components'
import floorSheets from './floorSheets'
import floor from '../../assets/plaholder-active/floor.png'
import Tile from '../Tile'

const steps = () => floorSheets.map((floorSheet, index) => css`${4.54 * index}% {
  border-image: url(${floorSheet}) 16 fill / var(--tile) / var(--tile) space;
}`)

const animationFloorSheet = keyframes`
  ${steps()}
`

const size = (multiply) => multiply && `calc(var(--tile) * ${multiply})`

const TileFloor = styled(Tile)`
  background: url(${floor}) no-repeat;
`

const Floor = styled.div`
  --steps: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ column }) => size(column)};
  height: ${({ row }) => size(row)};
  border-image: url(${floorSheets[0]}) 16 fill / var(--tile) / var(--tile) space;
  border-width: var(--tile);
  flex-wrap: wrap;
  position: relative;
  animation: ${animationFloorSheet} 2s linear infinite;
`

const hasRemoveAnimations = ({ removeAnimations }) => removeAnimations && css`
  animation: none;

  & > * {
    animation: none;
  }
`

const SquareIsland = styled.article`
  display: inline-flex;
  border: var(--tile) solid transparent;
  will-change: transform;

  ${hasRemoveAnimations};
`

export default {
  SquareIsland,
  Floor,
  TileFloor
}
