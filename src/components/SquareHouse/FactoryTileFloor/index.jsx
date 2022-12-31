import { number } from 'prop-types'
import S from '../SquareHouse.styles'

const FactoryTiteFloor = ({ row, column }) => (
  <>
    {Array.from({ length: row * column }, (_, i) =>
      (
        <S.TileFloor key={i} />
      )
    )}
  </>
)

FactoryTiteFloor.propTypes = {
  row: number.isRequired,
  column: number.isRequired
}

export default FactoryTiteFloor
