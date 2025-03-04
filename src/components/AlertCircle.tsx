import { FC } from "react"
import "../styles/AlertCircle.scss"

interface AlertCirclerops {
  className?: string
}

const AlertCircle: FC<AlertCirclerops> = ({ className }) => {
  return <div className={`alert-circle ${className}`}>⚠</div>
}

export default AlertCircle
