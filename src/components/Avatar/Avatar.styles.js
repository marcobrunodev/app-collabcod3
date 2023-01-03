import styled from 'styled-components'
import borderAvatar from '../../assets/plaholder-active/border-avatar.png'

const Avatar = styled.figure`
  width: calc(var(--tile) * 2);
  height: calc(var(--tile) * 2);
  border-image: url(${borderAvatar}) 8 fill / var(--size-border) / var(--size-border) space;
  background: url(${({ src }) => src}) no-repeat;
  background-position: center;
  background-size: 100%;
`

const Border = styled.div`
  --size-border: calc(var(--tile) / 2);

  border: var(--size-border) solid transparent;
`

export default {
  Border,
  Avatar
}
