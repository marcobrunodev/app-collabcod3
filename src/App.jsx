import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import Island from './components/Island'

const App = () => {
  const [padding, setPadding] = useState({ x: 0, y: 0 })
  const [{ x, y }] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ offset }) => {
    x.set(offset[0])
    y.set(offset[1])
    setPadding({ x: offset[0], y: offset[1] })
  })

  return (
    <animated.div {...bind()} style={{
      touchAction: 'none',
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      paddingTop: `${padding.y > 0 ? padding.y : 0}px`,
      paddingLeft: `${padding.x > 0 ? padding.x : 0}px`,
      marginTop: `${padding.y < 0 ? padding.y : 0}px`,
      marginLeft: `${padding.x < 0 ? padding.x : 0}px`,
      paddingBottom: `${padding.y < 0 ? padding.y * -1 : 0}px`,
      paddingRight: `${padding.x < 0 ? padding.x * -1 : 0}px`
    }}>
      <div>
        <Island column={2} row={5} />
        <Island column={10} row={10} />
        <Island column={10} row={10} />
        <Island column={10} row={10} />
        <Island column={10} row={10} />
        <Island column={10} row={10} />
      </div>
    </animated.div>
  )
}

export default App
