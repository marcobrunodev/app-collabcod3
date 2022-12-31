import { bool, node, number, oneOfType } from 'prop-types'
import FactoryTiteFloor from './FactoryTileFloor'
import S from './SquareIsland.styles'

const SquareIsland = ({ column, row, children }) => (
  <S.SquareIsland>
    <S.Floor column={column} row={row}>
      <FactoryTiteFloor column={column} row={row} />
    </S.Floor>
    {children}
  </S.SquareIsland>
)

SquareIsland.defaultProps = {
  children: false,
  column: 2,
  row: 2
}

SquareIsland.propTypes = {
  children: oneOfType[bool, node],
  column: number,
  row: number
}

export default SquareIsland
