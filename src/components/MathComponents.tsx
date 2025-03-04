import React from "react"
import Select from "../UI/Select"
import SelectItem from "../UI/SelectItem"

interface MatchFiltersProps {
  onChange: (value: string) => void
}

const MatchFilters: React.FC<MatchFiltersProps> = ({ onChange }) => {
  const handleSelectItem = (value: string) => {
    onChange(value) // Pass the selected value to parent component
  }

  console.log("Rendering MatchFilters")

  return (
    <div className="filters">
      <Select onChange={handleSelectItem}>
        <SelectItem value="all" onSelect={handleSelectItem}>
          Все статусы
        </SelectItem>
        <SelectItem value="live" onSelect={handleSelectItem}>
          Live
        </SelectItem>
        <SelectItem value="finished" onSelect={handleSelectItem}>
          Finished
        </SelectItem>
        <SelectItem value="preparing" onSelect={handleSelectItem}>
          Match preparing
        </SelectItem>
      </Select>
    </div>
  )
}

export default MatchFilters
