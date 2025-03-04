import { FC } from "react"
import AlertCircle from "../components/AlertCircle"

interface ErrorMessageProps {
  message?: string
  onRetry: () => void
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="error-message">
      <AlertCircle className="icon" />
      <span className="error-text">
        {message || "Ошибка: не удалось загрузить информацию"}
      </span>
    </div>
  )
}

export default ErrorMessage
