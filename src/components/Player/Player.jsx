import { bool, func, number } from 'prop-types'
import S from './Player.styles'

const Player = ({ x, y, clicked, onClick, onAnimationEnd }) => (
  <S.Player x={x} y={y} clicked={clicked} onClick={onClick} onAnimationEnd={onAnimationEnd} />
)

Player.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
  onAnimationEnd: func.isRequired,
  onClick: func.isRequired,
  clicked: bool.isRequired
}

export default Player
