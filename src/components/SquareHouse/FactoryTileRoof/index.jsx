import { number } from 'prop-types'
import S from '../SquareHouse.styles'

const FactoryTiteRoof = ({ row, column }) => (
  <>
    {Array.from({ length: row * column }, (_, i) =>
      (
        <S.TileRoof key={i} />
      )
    )}
  </>
)

FactoryTiteRoof.propTypes = {
  row: number.isRequired,
  column: number.isRequired
}

export default FactoryTiteRoof
