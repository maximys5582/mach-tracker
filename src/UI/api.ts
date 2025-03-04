import axios from "axios"
import { useEffect, useState } from "react"

const API_URL = "https://app.ftoyd.com/fronttemp-service/fronttemp"

export const useMatches = () => {
  const [matches, setMatches] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchMatches = async () => {
    try {
      setLoading(true)
      const response = await axios.get(API_URL)
      setMatches(response.data.data.matches)
      setError(null) // Сбрасываем ошибку при успешном запросе
    } catch (err: any) {
      setError("Ошибка: не удалось загрузить информацию") // Устанавливаем ошибку
      console.error("Ошибка при получении матчей:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMatches()
  }, [])

  return { matches, loading, error, refetch: fetchMatches }
}
