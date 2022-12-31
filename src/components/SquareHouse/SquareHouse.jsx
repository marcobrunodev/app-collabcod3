import { bool, number } from 'prop-types'
import FactoryTiteFloor from './FactoryTileFloor'
import FactoryTileMiddleOfTheRoof from './FactoryTileMiddleOfTheRoof'
import FactoryTiteRoof from './FactoryTileRoof'
import S from './SquareHouse.styles'

const SquareHouse = ({ row, column, x, y, center }) => (
  <S.SquareHouse x={x} y={y} center={center}>
    <S.Floor row={row} column={column}>
      <FactoryTiteFloor row={row} column={column} />
    </S.Floor>

    <S.Door />

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
  center: false
}

SquareHouse.propTypes = {
  row: number.isRequired,
  column: number.isRequired,
  x: number,
  y: number,
  center: bool
}

export default SquareHouse
