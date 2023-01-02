import useWorld from './useWorld'
import World from './World'

export default (props) => {
  const { bind, space, updateMousePosition, mousePosition, zoom, zoomIn, zoomOut, blur, removeBlur } = useWorld()

  return <World
            updateMousePosition={updateMousePosition}
            mousePosition={mousePosition}
            space={space}
            bind={bind}
            zoom={zoom}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            blur={blur}
            onTransitionEnd={removeBlur}
            {...props}
          />
}
