import { useState } from 'react'
import { useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const useWorld = () => {
  const minZoom = 2
  const maxZoom = 4
  const applyZoom = 1
  const applyBlur = 0.6
  const zoomStorage = Number(localStorage.getItem('zoom'))
  const [space, setSpace] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(zoomStorage || minZoom)
  const [blur, setBlur] = useState(0)
  const [{ x, y }] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ offset }) => {
    x.set(offset[0])
    y.set(offset[1])
    setSpace({ x: offset[0], y: offset[1] })
  })

  const zoomIn = () => {
    if (zoom < maxZoom) {
      setZoom(() => {
        const newZoom = zoom + applyZoom
        localStorage.setItem('zoom', newZoom)

        return newZoom
      })
      setBlur(applyBlur)
      localStorage.setItem('zoom', zoom)
    }
  }

  const zoomOut = () => {
    if (zoom > minZoom) {
      setZoom(() => {
        const newZoom = zoom - applyZoom
        localStorage.setItem('zoom', newZoom)

        return newZoom
      })
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
