import Island from './components/Island'
import World from './components/World'

const App = () => (
  <World>
    <Island column={2} row={5} />
    <Island column={10} row={10} />
    <Island column={10} row={10} />
    <Island column={10} row={10} />
    <Island column={10} row={10} />
    <Island column={10} row={10} />
  </World>
)

export default App
