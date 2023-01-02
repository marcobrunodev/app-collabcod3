import { useState } from 'react'
import { useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const useWorld = () => {
  const minZoom = 1
  const maxZoom = 3
  const applyZoom = 1
  const applyBlur = 0.6
  const [space, setSpace] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(minZoom)
  const [blur, setBlur] = useState(0)
  const [{ x, y }] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ offset }) => {
    x.set(offset[0])
    y.set(offset[1])
    setSpace({ x: offset[0], y: offset[1] })
  })

  const zoomIn = () => {
    if (zoom < maxZoom) {
      setZoom(zoom + applyZoom)
      setBlur(applyBlur)
    }
  }

  const zoomOut = () => {
    if (zoom > minZoom) {
      setZoom(zoom - applyZoom)
      setBlur(applyBlur)
    }
  }

  const removeBlur = () => setBlur(0)

  return {
    bind,
    space,
    zoom,
    zoomIn,
    zoomOut,
    blur,
    removeBlur
  }
}

export default useWorld
