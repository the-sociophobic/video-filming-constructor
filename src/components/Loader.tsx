import React from 'react'

import { Context } from './Store'


const Loader: React.FC = () => {
  const context = React.useContext(Context)
  const [transparent, setTransparent] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    if (!mounted) {
      context?.registerInitializeCallback?.(() => hide())
      setMounted(true)
    }
  })
    

  const hide = () => {
    setTransparent(true)
    setTimeout(
      () => setHidden(true)
      , 900)
  }

  return (
    <div className={`
      Loader
      ${transparent && 'Loader--transparent'}
      ${hidden && 'd-none'}
    `} />
  )
}


export default Loader