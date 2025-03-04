// SelectItem.tsx
import React from "react"
import "../styles/SelectItem.scss"

interface SelectItemProps {
  value: string
  children: React.ReactNode
  onSelect: (value: string) => void
}

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  children,
  onSelect,
}) => {
  return (
    <div className="select-item" onClick={() => onSelect(value)}>
      {children}
    </div>
  )
}

export default SelectItem
