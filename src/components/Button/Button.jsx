import { bool, func, oneOfType, string } from 'prop-types'
import S from './Button.styles'

const Button = ({ children, onClick, to, pixel }) => (
  <S.Button to={to} onClick={onClick} pixel={pixel}>
    {children}
  </S.Button>
)

Button.defaultProps = {
  pixel: false,
  onClick: false,
  to: false
}

Button.propTypes = {
  children: string.isRequired,
  pixel: bool,
  to: oneOfType([string, bool]),
  onClick: oneOfType([func, bool])
}

export default Button
