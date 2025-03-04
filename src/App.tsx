/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import MatchList from "./components/MatchList"
import "./styles/nullStyle.scss"

function App() {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchMatches = async () => {
    setLoading(true)
    setError("")
    try {
      const response = await fetch(
        "https://app.ftoyd.com/fronttemp-service/fronttemp"
      )
      if (!response.ok) throw new Error("Ошибка при загрузке данных")
      const data = await response.json()
      setMatches(data?.data?.matches || [])
    } catch (err) {
      setError("Ошибка: не удалось загрузить информацию")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMatches()
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MatchList
            matches={matches}
            onUpdate={fetchMatches}
            loading={loading}
            error={error}
          />
        }
      />
    </Routes>
  )
}

export default App
