import { getImageByKey } from "../assets/getImageByKey"
import "../styles/Loader.scss" // Убедитесь, что файл стилей импортирован

const Loader = () => {
  return <div className="loader">{getImageByKey("refresh")}</div>
}

export default Loader
