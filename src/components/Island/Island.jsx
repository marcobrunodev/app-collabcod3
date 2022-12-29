import { number } from 'prop-types'
import S from './Island.styles'

const Island = ({ column, row }) => (
  <S.Island>
    <S.Floor column={column} row={row} />
  </S.Island>
)

Island.defaultProps = {
  column: 2,
  row: 2
}

Island.propTypes = {
  column: number,
  row: number
}

export default Island
