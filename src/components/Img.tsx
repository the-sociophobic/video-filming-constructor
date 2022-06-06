import React from 'react'

import { File } from './Store/Types/contentfulTypes'


type Props = {
  src?: string
  className?: string
  file?: File | undefined
  alt?: string
}


const Img: React.FC<Props> = ({
  src,
  className,
  file,
  alt,
}) => {

  return (
    <div className={`Img ${className}`}>
      <div
        // alt={alt || file?.file?.fileName || ''}
        // src={src || file?.file?.url || ''}
        style={{ backgroundImage: `url(${src || file?.file?.url || ''})` }}
        className={`Img__img`}
      />
    </div>
  )
}


export default Img