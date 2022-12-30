import { number } from 'prop-types'
import S from './SquareIsland.styles'

const SquareIsland = ({ column, row }) => (
  <S.SquareIsland>
    <S.Floor column={column} row={row}>
      {Array.from({ length: row * column }, (_, i) =>
        (
          <S.TileFloor key={i} />
        )
      )}
    </S.Floor>
  </S.SquareIsland>
)

SquareIsland.defaultProps = {
  column: 2,
  row: 2
}

SquareIsland.propTypes = {
  column: number,
  row: number
}

export default SquareIsland
