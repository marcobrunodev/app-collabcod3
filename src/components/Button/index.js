import styled, { css } from 'styled-components'

const hasPixel = ({ pixel }) => pixel && css`
  font-size: 1.8rem;
  font-family: 'Press Start 2P', sans-serif;
`

const Button = styled.button`
  background-color: var(--color-first);
  color: var(--color-third);
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  cursor: var(--cursor-pointer);
  box-shadow: 0.4rem 0.4rem 0px var(--color-third);
  transition: box-shadow 100ms ease-in-out, transform 100ms ease-in-out;

  &:hover {
    box-shadow: 0rem 0rem 0px var(--color-third);
    transform: translate(0.2rem, 0.2rem);
  }

  ${hasPixel};
`

export default Button
