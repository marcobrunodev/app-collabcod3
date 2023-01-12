import { bool, node, number, oneOfType } from 'prop-types'
import FactoryTileFloor from './FactoryTileFloor'
import S from './SquareIsland.styles'

const SquareIsland = ({ column, row, children, removeAnimations }) => (
  <S.SquareIsland removeAnimations={removeAnimations}>
    <S.Floor className="chromeWhitoutAnimation" column={column} row={row}>
      <FactoryTileFloor column={column} row={row} />
    </S.Floor>
    {children}
  </S.SquareIsland>
)

SquareIsland.defaultProps = {
  children: false,
  column: 2,
  row: 2,
  removeAnimations: false
}

SquareIsland.propTypes = {
  children: oneOfType([bool, node]),
  column: number,
  row: number,
  removeAnimations: bool
}

export default SquareIsland
