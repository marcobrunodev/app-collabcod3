import { bool, func } from 'prop-types'
import S from './IconButton.styles'

const IconButton = ({ whatIcon, onClick }) => {
  <S.IconButton whatIcon={whatIcon} onClick={onClick}/>
}

IconButton.defaultProps = {
  plus: false,
  less: false,
  onClick: () => {}
}

IconButton.propTypes = {
  plus: bool,
  less: bool,
  onClick: func
}

export default IconButton
