import SquareHouse from '../../components/SquareHouse'
import SquareIsland from '../../components/SquareIsland'
import World from '../../components/World'
import Cat from '../../npcs/Cat'

const Home = () => (
  <World>
    <SquareIsland row={10} column={20}>
      <SquareHouse row={4} column={8} x={5} y={1} positionDoor={1} />

      <Cat x={5} y={5.6} />

      <Cat x={17.5} y={8} />
    </SquareIsland>
  </World>
)

export default Home
