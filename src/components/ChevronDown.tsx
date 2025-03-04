import { FC } from "react"
import { getImageByKey } from "../assets/getImageByKey"
import "../styles/ChevronDown.scss"

interface ChevronDownProps {
  className?: string
  isOpen: boolean // Передаем состояние isOpen
}

const ChevronDown: FC<ChevronDownProps> = ({ className, isOpen }) => {
  return (
    <div className={`chevron-down ${className}`}>
      <div className={`arrow ${isOpen ? "open" : ""}`}>
        {getImageByKey("arrow")}{" "}
        {/* Убедись, что иконка меняет направление при open */}
      </div>
    </div>
  )
}

export default ChevronDown
