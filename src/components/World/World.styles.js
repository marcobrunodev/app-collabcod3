import styled from 'styled-components'

const World = styled.main`
  will-change: transform;
  transform: scale(${({ zoom }) => zoom});
  transition: 500ms transform ease-in-out;
`

export default {
  World
}
