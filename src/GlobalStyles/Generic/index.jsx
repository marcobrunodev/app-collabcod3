import useDetectBrowser from '../../hooks/useDetectBrowser'
import Reset from './Reset'

const Generic = () => {
  const browser = useDetectBrowser()

  return (
    <Reset isChrome={browser === 'Chrome'} />
  )
}

export default Generic
