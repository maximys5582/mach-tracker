import React, { useState } from "react"
import "../styles/Card.scss"
import ChevronDown from "./ChevronDown"

interface CardProps {
  children: React.ReactNode
  className?: string
  additionalContent?: React.ReactNode
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  additionalContent,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    // Проверяем, был ли клик именно по .card-header
    if ((e.target as HTMLElement).closest(".card-header")) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div
      className={`card ${className} ${isOpen ? "open" : ""}`}
      onClick={toggleOpen}
    >
      <div className="card-header">
        {children}
        <ChevronDown
          className={`icon ${isOpen ? "open" : ""}`}
          isOpen={isOpen}
        />
      </div>
      {isOpen && <div className="card-content">{additionalContent}</div>}
    </div>
  )
}

export default Card
