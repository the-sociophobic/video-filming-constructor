import React from 'react'

import Div100vh from 'react-div-100vh'


export type PopupProps = {
  children: any
  opened: boolean
  close: () => void
  type: 'question' | 'finish'
  price: number
}


const Popup: React.FC<PopupProps> = ({
  children,
  opened = false,
  close,
  type = 'question',
  price
}) => {

  const popupRef = React.useRef<HTMLHeadingElement>(null)
  
  const handleClick = (e: any) =>
    (!popupRef.current?.contains?.(e?.target) && opened)
      && close()

  React.useEffect(() => {
    window.addEventListener('click', handleClick, true)
    return () =>
      window.removeEventListener('click', handleClick, true)

  })

  return !opened ?
    <div />
    :
    <Div100vh className='Popup__background'>
      <div className='Popup__price'>
        <div className='container d-flex flex-row justify-content-end'>
          <div className='p p--m me-5'>
            Текущая<br />стоимость:
          </div>
          <h1 className='h1'>
            {price} р
          </h1>
        </div>
      </div>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className={`col ${type === 'finish' && 'col-md-8 col-xl-4 mx-auto'} h-100 d-flex flex-column justify-content-center`}>
            <div className='Popup__close d-flex flex-row justify-content-end'>
              Закрыть
            </div>
            <div className='Popup' ref={popupRef}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Div100vh>
}


export default Popup