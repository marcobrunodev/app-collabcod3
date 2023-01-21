import styled from 'styled-components'
import Planet from '../../components/Planet'

const Login = styled.main`
  position: relative;
  background-color: var(--color-black-first);
  height: 100vh;

  & > ${Planet} {
    position: absolute;
  }

  & > ${Planet}.terran {
    top: 10vh;
    left: 20vw;
  }

  & > ${Planet}.lava {
    top: 60vh;
    left: 60vw;
  }

  & > ${Planet}.baren {
    top: 20vh;
    left: 80vw;
  }

  & > ${Planet}.ice {
    top: 50vh;
    left: 35vw;
  }
`

export default {
  Login
}
