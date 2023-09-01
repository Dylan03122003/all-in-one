import React from 'react'

interface ButtonProps {
  // Styles
  backgroundColor?: string
  hoverColor?: string
  textColor?: string
  rounded?: string
  paddingY?: string
  paddingX?: string
  disabledBgColor?: string
  width?: string
  // Other properties
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  stopPropagation?: boolean
  disabled?: boolean
  children: React.ReactNode
}

const Button = ({
  backgroundColor = 'bg-blue-500',
  textColor = 'text-blue-50',
  hoverColor = 'hover:bg-blue-400',
  rounded = 'rounded-md',
  disabledBgColor = 'disabled:bg-gray-300',
  paddingX = 'px-4',
  paddingY = 'py-1',
  width,
  type = 'button',
  disabled = false,
  onClick,
  stopPropagation = false,
  children,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={(e) => {
        if (stopPropagation) e.stopPropagation()
        onClick && onClick()
      }}
      className={`${width} ${backgroundColor} ${paddingY} ${paddingX} ${textColor} ${rounded} ${hoverColor} ${disabledBgColor}`}
    >
      {children}
    </button>
  )
}

export default Button
