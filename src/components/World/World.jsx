import { node, func, shape, number } from 'prop-types'
import { animated } from '@react-spring/web'
import S from './World.styles'

const World = ({ children, bind, space, onWheel, zoom, mousePosition }) => (
  <S.World onWheel={onWheel} zoom={zoom} mousePosition={mousePosition}>
    <animated.div {...bind()} style={{
      touchAction: 'none',
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      paddingTop: `${space.y > 0 ? space.y / zoom : 0}px`,
      paddingLeft: `${space.x > 0 ? space.x / zoom : 0}px`,
      marginTop: `${space.y < 0 ? space.y / zoom : 0}px`,
      marginLeft: `${space.x < 0 ? space.x / zoom : 0}px`,
      paddingBottom: `${space.y < 0 ? (space.y * -1) / zoom : 0}px`,
      paddingRight: `${space.x < 0 ? (space.x * -1) / zoom : 0}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
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
  mousePosition: shape({ x: number, y: number }).isRequired,
  zoom: number
}

export default World