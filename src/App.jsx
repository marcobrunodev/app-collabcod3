import SquareHouse from './components/SquareHouse'
import SquareIsland from './components/SquareIsland'
import World from './components/World'

const App = () => (
  <World>
    <SquareIsland row={10} column={10}>
      <SquareHouse row={2} column={6} x={1} y={1} />

      <SquareHouse row={1} column={2} x={1} y={6} />
    </SquareIsland>
  </World>
)

export default App
