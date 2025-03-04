import React, { useState } from "react"
import { getImageByKey } from "../assets/getImageByKey"
import "../styles/Select.scss"

interface SelectProps {
  children: React.ReactElement[] // Ensure the children are React elements (i.e., SelectItem)
  defaultValue?: string
  onChange?: (value: string) => void
}

const Select: React.FC<SelectProps> = ({
  children,
  defaultValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue || "")

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    setIsOpen(false)
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div className="custom-select" onClick={handleToggle}>
      <div className="selected-item">{selectedValue || "Выберите опцию"}</div>
      {isOpen && (
        <div className="options">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                onSelect: handleSelect, // passing onSelect here
              })
            }
            return child
          })}
        </div>
      )}
      <div className={`arrow ${isOpen ? "open" : ""}`}>
        {getImageByKey("arrowFilter")}
      </div>
    </div>
  )
}

export default Select
