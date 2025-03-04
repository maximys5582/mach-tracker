import "../styles/MatchFilters.scss"
import Select from "../UI/Select"
import SelectItem from "../UI/SelectItem"

const MatchFilters = () => {
  const handleSelectChange = (value: string) => {
    console.log("Выбран статус:", value)
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
