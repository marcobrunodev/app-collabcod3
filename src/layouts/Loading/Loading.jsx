import { bool } from 'prop-types'
import Gueio from '../../components/Gueio'
import S from './Loading.styles'

const Loading = ({ status }) => (
  <S.Loading status={status}>
    <S.Bg />
    <Gueio center />
  </S.Loading>
)

Loading.propTypes = {
  status: bool.isRequired
}

export default Loading
