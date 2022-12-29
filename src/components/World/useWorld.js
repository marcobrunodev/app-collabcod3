import { useState } from 'react'
import { useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const useWorld = () => {
  const [space, setSpace] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [{ x, y }] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ offset }) => {
    x.set(offset[0])
    y.set(offset[1])
    setSpace({ x: offset[0], y: offset[1] })
  })

  const zoomInOut = ({ deltaY }) => {
    setZoom(
      deltaY > 0
        ? (zoom < 3 && zoom + 0.1) || 3
        : (zoom > 0.8 && zoom - 0.1) || 0.8)
  }

  return {
    bind,
    space,
    zoom,
    zoomInOut
  }
}

export default useWorld
