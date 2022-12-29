import { node, func, shape, number } from 'prop-types'
import { animated } from '@react-spring/web'
import S from './World.styles'

const World = ({ children, bind, space, onWheel, zoom }) => (
  <S.World onWheel={onWheel} zoom={zoom}>
    <animated.div {...bind()} style={{
      touchAction: 'none',
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      paddingTop: `${space.y > 0 ? space.y : 0}px`,
      paddingLeft: `${space.x > 0 ? space.x : 0}px`,
      marginTop: `${space.y < 0 ? space.y : 0}px`,
      marginLeft: `${space.x < 0 ? space.x : 0}px`,
      paddingBottom: `${space.y < 0 ? space.y * -1 : 0}px`,
      paddingRight: `${space.x < 0 ? space.x * -1 : 0}px`
    }}>
      {children}
    </animated.div>
  </S.World>
)

World.defaultProps = {
  zoom: 1
}

World.propTypes = {
  children: node.isRequired,
  bind: func.isRequired,
  space: shape(
    {
      x: number.isRequired,
      y: number.isRequired
    }
  ).isRequired,
  onWheel: func.isRequired,
  zoom: number
}

export default World
