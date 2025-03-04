import React from "react"
import { getImageByKey } from "../assets/getImageByKey"
import "../styles/MachList.scss"
import { useMatches } from "../UI/api"
import Button from "../UI/Button"
import ErrorMessage from "../UI/ErrorMessage"
import Badge from "./Badge"
import Card from "./Card"
import Loader from "./Loader"
import MatchFilters from "./MatchFilters"

interface Player {
  username: string
  kills: number
  points: number
  place: number
}

interface Match {
  homeTeam: {
    name: string
    players: Player[]
    points: number
    place: number
    total_kills: number
  }
  awayTeam: {
    name: string
    players: Player[]
    points: number
    place: number
    total_kills: number
  }
  status: "Live" | "Finished" | "Scheduled" | "Ongoing"
  homeScore: number
  awayScore: number
}

const MatchList: React.FC = () => {
  const { matches, refetch, loading, error } = useMatches()

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Live":
        return "live"
      case "Finished":
        return "finished"
      case "Ongoing":
        return "ongoing"
      default:
        return ""
    }
  }

  return (
    <div className="matches">
      <div className="matches-header">
        <div className="matches-header__left">
          {getImageByKey("logo")}
          <MatchFilters />
        </div>

        <div className="matches-header__right">
          {error && <ErrorMessage message={error} onRetry={refetch} />}
          <Button className="update-btn" onClick={refetch} disabled={loading}>
            {loading ? (
              <>
                Обновить <Loader />
              </>
            ) : (
              "Обновить"
            )}
          </Button>
        </div>
      </div>

      {matches.map((match, index) => (
        <Card
          key={index}
          className="match-card"
          additionalContent={
            <div className="match-details">
              <div className="team-details">
                <h3>{match.awayTeam.name}</h3>
                <div className="user-stats">
                  {match.awayTeam.players.map((player, playerIndex) => (
                    <div className="user-stats__row" key={playerIndex}>
                      <div className="user-stats__info">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            columnGap: "5px",
                          }}
                        >
                          <img src={getImageByKey("avatar") as string} alt="" />
                          <span style={{ color: "#fff" }}>
                            {player.username}
                          </span>
                        </div>
                        <span>Убийств: {player.kills}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="team-stats">
                  <div className="grey-style">
                    Очки: <span>+{match.awayTeam.points}</span>
                  </div>
                  <div className="grey-style">
                    Место: <span>{match.awayTeam.place}</span>
                  </div>
                  <div className="grey-style">
                    Всего убийств: <span>{match.awayTeam.total_kills}</span>
                  </div>
                </div>
              </div>
              <div className="vs">
                <img src={getImageByKey("vs") as string} alt="" />
              </div>
              <div className="team-details">
                <h3>{match.homeTeam.name}</h3>
                <div className="user-stats">
                  {match.homeTeam.players.map((player, playerIndex) => (
                    <div className="user-stats__row" key={playerIndex}>
                      <div className="user-stats__info">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            columnGap: "5px",
                          }}
                        >
                          <img src={getImageByKey("avatar") as string} alt="" />
                          <span style={{ color: "#fff" }}>
                            {player.username}
                          </span>
                        </div>
                        <span>Убийств: {player.kills}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="team-stats">
                  <div className="grey-style">
                    Очки: <span>+{match.homeTeam.points}</span>
                  </div>
                  <div className="grey-style">
                    Место: <span>{match.homeTeam.place}</span>
                  </div>
                  <div className="grey-style">
                    Всего убийств: <span>{match.homeTeam.total_kills}</span>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <div className="match-content">
            <div className="team">
              <img
                src={getImageByKey("role") as string}
                alt="Team Logo"
                className="team-logo"
              />
              <span>{match.awayTeam.name}</span>
            </div>
            <div className="match-badges">
              <Badge className="score-badge">
                {match.homeScore} - {match.awayScore}
              </Badge>
              {match.status !== "Scheduled" && (
                <Badge className={getStatusClass(match.status)}>
                  {match.status}
                </Badge>
              )}
            </div>
            <div className="team">
              <span>{match.homeTeam.name}</span>
              <img
                src={getImageByKey("role") as string}
                alt="Team Logo"
                className="team-logo"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default MatchList
