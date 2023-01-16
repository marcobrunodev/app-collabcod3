import { string } from 'prop-types'
import S from './Avatar.styles'

const Avatar = ({ src }) => (
  <S.Avatar>
    <S.Image src={src} />
  </S.Avatar>
)

Avatar.propTypes = {
  src: string.isRequired
}

export default Avatar
