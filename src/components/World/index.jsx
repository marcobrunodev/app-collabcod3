import useWorld from './useWorld'
import World from './World'

export default (props) => {
  const { bind, space, zoom, zoomInOut, updateMousePosition, mousePosition } = useWorld()

  return <World
            updateMousePosition={updateMousePosition}
            mousePosition={mousePosition}
            space={space}
            bind={bind}
            zoom={zoom}
            onWheel={zoomInOut}
            {...props}
          />
}
