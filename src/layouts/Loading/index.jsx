import Loading from './Loading'
import useLoading from './useLoading'

export default () => {
  const { status } = useLoading()

  return <Loading status={status} onVisibilityChange={() => console.log('enter here')} />
}
