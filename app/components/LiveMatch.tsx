import { LiveMatch as LiveMatchType } from "../../types/cricket";
import TeamBadge from "./TeamBadge";
import { TeamName } from "../constants/teams";
import MatchCommentary from "./MatchCommentary";
import { Card, List, Typography, Space } from "antd";

interface Props {
  match: LiveMatchType;
}

export default function LiveMatch({ match }: Props) {
  return (
    <Card className="match-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="relative flex">
            <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </div>
          <Typography.Text strong>LIVE</Typography.Text>
        </div>
        <Space>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <Typography.Text type="secondary">{match.venue}</Typography.Text>
        </Space>
      </div>

      <List
        className="mb-6"
        itemLayout="horizontal"
        dataSource={[
          {
            team: match.teams.team1,
            score: match.score?.team1Score,
          },
          {
            team: match.teams.team2,
            score: match.score?.team2Score,
          },
        ]}
        renderItem={(item) => (
          <List.Item>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4 flex-1">
                <TeamBadge teamName={item.team as TeamName} size="lg" />
              </div>
              {item.score && (
                <Typography.Text strong className="text-xl tabular-nums">
                  {item.score}
                </Typography.Text>
              )}
            </div>
          </List.Item>
        )}
      />

      <Card className="bg-gray-50">
        <List split={false}>
          <List.Item>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <Typography.Text type="secondary">
                  Current Over:
                </Typography.Text>
                <Typography.Text strong className="ml-2 tabular-nums">
                  {match.currentOver}
                </Typography.Text>
              </div>
              <div className="text-right">
                <Typography.Text type="secondary">Run Rate:</Typography.Text>
                <Typography.Text strong className="ml-2 tabular-nums">
                  {match.runRate}
                </Typography.Text>
              </div>
            </div>
          </List.Item>

          {match.requiredRunRate && (
            <List.Item>
              <Typography.Text type="secondary">Required RR:</Typography.Text>
              <Typography.Text strong className="ml-2 tabular-nums">
                {match.requiredRunRate}
              </Typography.Text>
            </List.Item>
          )}

          <List.Item>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <Typography.Text type="secondary" className="mb-1 block">
                  Batting:
                </Typography.Text>
                <Space direction="vertical" size="small">
                  {match.currentBatsmen.map((batsman, idx) => (
                    <Space key={idx}>
                      <Typography.Text strong>{batsman}</Typography.Text>
                      {idx === 0 && (
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block" />
                      )}
                    </Space>
                  ))}
                </Space>
              </div>
              <div className="text-right">
                <Typography.Text type="secondary" className="mb-1 block">
                  Bowling:
                </Typography.Text>
                <Typography.Text strong>{match.currentBowler}</Typography.Text>
              </div>
            </div>
          </List.Item>
        </List>
      </Card>

      {match.commentary && <MatchCommentary commentary={match.commentary} />}
    </Card>
  );
}
