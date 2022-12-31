import { number } from 'prop-types'
import S from './Cat.styles'

const Cat = ({ x, y }) => (
  <S.Cat x={x} y={y} />
)

Cat.propTypes = {
  x: number.isRequired,
  y: number.isRequired
}

export default Cat
