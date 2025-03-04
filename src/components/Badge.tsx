import React from "react"
import "../styles/Badge.scss"

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => {
  return <span className={`badge ${className}`}>{children}</span>
}

export default Badge
