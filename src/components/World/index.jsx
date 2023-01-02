import useWorld from './useWorld'
import World from './World'

export default (props) => {
  const { bind, space, updateMousePosition, mousePosition } = useWorld()

  return <World
            updateMousePosition={updateMousePosition}
            mousePosition={mousePosition}
            space={space}
            bind={bind}
            {...props}
          />
}
