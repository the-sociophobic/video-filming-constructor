import React from 'react'


export type ButtonProps = {
  children: any
  disabled?: boolean
  _onClick: () => void
  className?: string
  classNameEnabled?: string
  classNameDisabled?: string
}


const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  _onClick,
  className,
  classNameEnabled,
  classNameDisabled
}) =>
  <div
    className={`
      Button
      ${disabled ? (classNameDisabled || 'Button--disabled') : classNameEnabled}
      ${className}
    `}
    onClick={() => !disabled && _onClick()}
  >
    {children}
  </div>



export default Button