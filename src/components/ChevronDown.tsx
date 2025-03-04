import { FC } from "react"
import { getImageByKey } from "../assets/getImageByKey"
import "../styles/ChevronDown.scss"

interface ChevronDownProps {
  className?: string
  isOpen: boolean
}

const ChevronDown: FC<ChevronDownProps> = ({ className, isOpen }) => {
  return (
    <div className={`chevron-down ${className}`}>
      <div className={`arrow ${isOpen ? "open" : ""}`}>
        {getImageByKey("arrow")}{" "}
      </div>
    </div>
  )
}

export default ChevronDown
