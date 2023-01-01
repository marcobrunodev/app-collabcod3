import styled, { css, keyframes } from 'styled-components'
import houseBorder from '../../assets/plaholder-active/house-border.png'
import roofBorder from '../../assets/plaholder-active/roof-border.png'
import middleRoofBorder from '../../assets/plaholder-active/middle-roof-border.png'
import house from '../../assets/plaholder-active/house.png'
import smoke from '../../assets/plaholder-active/smoke.gif'
import Tile from '../Tile'

const openDoor = keyframes`
  from {
    background-position: calc(var(--tile) * -3) 0;
  }
  to {
    
    background-position: calc(var(--tile) * -3) calc(var(--tile) * -3);
  }
`

const closeDoor = keyframes`
  from {
    background-position: calc(var(--tile) * -3) calc(var(--tile) * -3);
  }
  to {
    background-position: calc(var(--tile) * -3) 0;
  }
`

const size = (multiply) => multiply && `calc(var(--tile) * ${multiply})`

const hasCenter = ({ center }) => center && css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const hasPositionDoor = ({ positionDoor }) => positionDoor >= 0 && css`
  left: calc(var(--tile) * ${positionDoor});
`

const Door = styled.div`
  position: absolute;
  bottom: calc(var(--tile) * -1);
  left: var(--tile);
  width: var(--tile);
  height: var(--tile);
  background: url(${house}) no-repeat;
  background-position: calc(var(--tile) * -3) 0;
  animation: 500ms steps(3) forwards alternate ${closeDoor};

  ${hasPositionDoor}
`

const Smoke = styled.img.attrs({ src: smoke })`
  position: absolute;
  width: var(--tile);
  height: var(--tile);
  right: 3.5px;
  top: -13px;
`

const Chimney = styled.div`
  position: absolute;
  right: 0;
  width: var(--tile);
  height: var(--tile);
  background: url(${house}) no-repeat;
  background-position: 0 calc(var(--tile) * -4);
`

const TileMiddleOfTheRoof = styled(Tile)`
  background: url(${house}) no-repeat;
  background-position: calc(var(--tile) * -5) calc(var(--tile) * -2);
`

const MiddleOfTheRoof = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  height: var(--tile);
  width: ${({ column }) => size(column)};
  transition: 400ms opacity linear;
  border-image: url(${middleRoofBorder}) 16 fill / var(--tile) / var(--tile) space;
  border-width: var(--tile);
`

const TileRoof = styled(Tile)`
  background: url(${house}) no-repeat;
  background-position: calc(var(--tile) * -5) calc(var(--tile) * -1);
`

const Roof = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: calc(var(--tile) * -1);
  width: ${({ column }) => size(column)};
  height: ${({ row }) => size(row)};
  border-image: url(${roofBorder}) 16 fill / var(--tile) / var(--tile) space;
  border-width: var(--tile);
  transition: 500ms opacity linear;
`

const TileFloor = styled(Tile)`
  background: url(${house}) no-repeat;
  background-position: calc(var(--tile) * -1) calc(var(--tile) * -2);
`

const Floor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: ${({ column }) => size(column)};
  height: ${({ row }) => size(row)};
  border-image: url(${houseBorder}) 16 fill / var(--tile) / var(--tile) space;
  border-width: var(--tile);
`

const SquareHouse = styled.article`
  position: absolute;
  display: inline-flex;
  border: var(--tile) solid transparent;
  top: calc(var(--tile) * ${({ y }) => y});
  left: calc(var(--tile) * ${({ x }) => x});
  will-change: transform;

  &:hover {
    & > ${Roof}, & > ${MiddleOfTheRoof} {
      opacity: 0;
      transition: 200ms opacity linear;
    }
    & > ${Door} {
      animation: 500ms steps(3) forwards alternate ${openDoor};
    }
  }

  ${hasCenter}
`

export default {
  SquareHouse,
  Floor,
  TileFloor,
  Roof,
  TileRoof,
  MiddleOfTheRoof,
  TileMiddleOfTheRoof,
  Door,
  Chimney,
  Smoke
}
