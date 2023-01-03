import { node, func, shape, number } from 'prop-types'
import { animated } from '@react-spring/web'
import S from './World.styles'
import IconButton from '../IconButton'
import Chat from '../../layouts/Chat'

const World = ({ children, bind, space, zoom, zoomIn, zoomOut, blur, onTransitionEnd }) => (
  <S.World>
    <S.Camera zoom={zoom} blur={blur} onTransitionEnd={onTransitionEnd}>
      <animated.div {...bind()} style={{
        touchAction: 'none',
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        paddingTop: `${space.y > 0 ? space.y : 0}px`,
        paddingLeft: `${space.x > 0 ? space.x : 0}px`,
        marginTop: `${space.y < 0 ? space.y : 0}px`,
        marginLeft: `${space.x < 0 ? space.x : 0}px`,
        paddingBottom: `${space.y < 0 ? (space.y * -1) : 0}px`,
        paddingRight: `${space.x < 0 ? (space.x * -1) : 0}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {children}
      </animated.div>
    </S.Camera>

    <S.Menu>
      <IconButton whatIcon="plus" onClick={zoomIn} />
      <IconButton whatIcon="less" onClick={zoomOut} />
    </S.Menu>

    <Chat />
  </S.World>
)

World.propTypes = {
  children: node.isRequired,
  bind: func.isRequired,
  space: shape(
    {
      x: number.isRequired,
      y: number.isRequired
    }
  ).isRequired,
  zoom: number.isRequired,
  zoomIn: func.isRequired,
  zoomOut: func.isRequired,
  blur: number.isRequired,
  onTransitionEnd: func.isRequired
}

export default World
