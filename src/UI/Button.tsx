import React from "react"
import "../styles/Button.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
