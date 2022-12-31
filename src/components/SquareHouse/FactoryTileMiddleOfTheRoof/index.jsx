import { number } from 'prop-types'
import S from '../SquareHouse.styles'

const FactoryTileMiddleOfTheRoof = ({ column }) => (
  <>
    {Array.from({ length: column }, (_, i) =>
      (
        <S.TileMiddleOfTheRoof key={i} />
      )
    )}
  </>
)

FactoryTileMiddleOfTheRoof.propTypes = {
  column: number.isRequired
}

export default FactoryTileMiddleOfTheRoof
