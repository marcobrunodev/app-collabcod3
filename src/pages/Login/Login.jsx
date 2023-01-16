import Planet from '../../components/Planet'
import S from './Login.styles'

const Login = () => (
  <S.Login>
    <Planet what="lava" scale={1.2} />
    <Planet what="ice" scale={0.8} />
    <Planet what="terran" scale={1.5} />
    <Planet what="baren" scale={0.6} />
  </S.Login>
)

export default Login
