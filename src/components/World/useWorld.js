import { useState } from 'react'
import { useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const useWorld = () => {
  const minZoom = 1
  const maxZoom = 3
  const [space, setSpace] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(minZoom)
  const [{ x, y }] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ offset }) => {
    x.set(offset[0])
    y.set(offset[1])
    setSpace({ x: offset[0], y: offset[1] })
  })

  const zoomInOut = ({ deltaY }) => {
    setZoom(
      deltaY > 0
        ? (zoom < maxZoom && zoom + 1) || maxZoom
        : (zoom > minZoom && zoom - 1) || minZoom)
  }

  return {
    bind,
    space,
    zoom,
    zoomInOut
  }
}

export default useWorld
