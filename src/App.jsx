import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import Island from './components/Island'

const App = () => {
  const [{ x, y }] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ offset }) => {
    x.set(offset[0])
    y.set(offset[1])
  })

  return (
    <animated.div {...bind()} style={{ x, y, willChange: 'transform', touchAction: 'none' }}>
      <Island column={2} row={5} />
      <Island column={10} row={10} />
      <Island column={10} row={10} />
      <Island column={10} row={10} />
      <Island column={10} row={10} />
      <Island column={10} row={10} />
    </animated.div>
  )
}

export default App
