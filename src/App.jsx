import SquareIsland from './components/SquareIsland'
import World from './components/World'

const App = () => (
  <World>
    <SquareIsland row={2} column={2} />
  </World>
)

export default App
