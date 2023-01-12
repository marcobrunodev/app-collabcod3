import { oneOfType, bool, number, node } from 'prop-types'
import FactoryTiteFloor from './FactoryTileFloor'
import FactoryTileMiddleOfTheRoof from './FactoryTileMiddleOfTheRoof'
import FactoryTiteRoof from './FactoryTileRoof'
import S from './SquareHouse.styles'

const SquareHouse = ({ row, column, x, y, center, positionDoor, children }) => (
  <S.SquareHouse x={x} y={y} center={center}>
    <S.Floor row={row} column={column}>
      <FactoryTiteFloor row={row} column={column} />
      {children}
    </S.Floor>

    <S.Door positionDoor={positionDoor} />

    <S.Roof row={row + 1} column={column}>
      <FactoryTiteRoof row={row + 1} column={column} />
    </S.Roof>

    <S.MiddleOfTheRoof column={column}>
      <FactoryTileMiddleOfTheRoof column={column} />
      <S.Chimney />
      <S.Smoke />
    </S.MiddleOfTheRoof>

  </S.SquareHouse>
)

SquareHouse.defaultProps = {
  x: 0,
  y: 0,
  center: false,
  positionDoor: false
}

SquareHouse.propTypes = {
  row: number.isRequired,
  column: number.isRequired,
  x: number,
  y: number,
  center: bool,
  positionDoor: oneOfType([number, bool]),
  children: node
}

export default SquareHouse
