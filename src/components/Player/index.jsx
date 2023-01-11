import Player from './Player'
import usePlayer from './usePlayer'

export default (props) => {
  const { clicked, handleClick, handleAnimationEnd } = usePlayer()

  return <Player clicked={clicked} onClick={handleClick} onAnimationEnd={handleAnimationEnd} {...props} />
}
