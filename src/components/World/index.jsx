import useWorld from './useWorld'
import World from './World'

export default (props) => {
  const { bind, space, zoom, zoomInOut } = useWorld()

  return <World space={space} bind={bind} zoom={zoom} onWheel={zoomInOut} {...props} />
}
