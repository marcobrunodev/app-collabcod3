import { useState } from 'react'

const usePlayer = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    console.log('enter here handleClick')
    setClicked(true)
  }

  const handleAnimationEnd = () => {
    setClicked(false)
    console.log('enter here handleAnimationEnd')
  }

  return {
    clicked,
    handleClick,
    handleAnimationEnd
  }
}

export default usePlayer
