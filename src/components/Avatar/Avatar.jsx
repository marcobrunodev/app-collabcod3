import { string } from 'prop-types'
import S from './Avatar.styles'

const Avatar = ({ src }) => (
  <S.Border>
    <S.Avatar src={src} />
  </S.Border>
)

Avatar.propTypes = {
  src: string.isRequired
}

export default Avatar
