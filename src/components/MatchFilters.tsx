import "../styles/MatchFilters.scss"
import Select from "../UI/Select"
import SelectItem from "../UI/SelectItem"

const MatchFilters = ({
  onFilterChange,
}: {
  onFilterChange: (status: string) => void
}) => {
  const handleSelectChange = (value: string) => {
    onFilterChange(value) // передаем выбранный фильтр обратно в родительский компонент
  }

  return (
    <div className="filters">
      <Select onChange={handleSelectChange}>
        <SelectItem value="all" onSelect={handleSelectChange}>
          Все статусы
        </SelectItem>
        <SelectItem value="live" onSelect={handleSelectChange}>
          Live
        </SelectItem>
        <SelectItem value="finished" onSelect={handleSelectChange}>
          Finished
        </SelectItem>
        <SelectItem value="preparing" onSelect={handleSelectChange}>
          Match preparing
        </SelectItem>
      </Select>
    </div>
  )
}

export default MatchFilters
