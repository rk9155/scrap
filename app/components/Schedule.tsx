"use client";

import { Match } from "../../types/cricket";
import TeamBadge from "./TeamBadge";
import { TeamName } from "../constants/teams";
import { List, Card } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

interface Props {
  matches: Match[];
}

export default function Schedule({ matches }: Props) {
  return (
    <List
      className="mt-4"
      grid={{ gutter: 16, column: 1 }}
      dataSource={matches}
      renderItem={(match) => (
        <List.Item>
          <Card className="match-card">
            <div className="flex items-center text-gray-600 mb-4">
              <CalendarOutlined className="w-4 h-4 mr-2" />
              <time className="text-sm font-medium">
                {new Date(match.date).toLocaleDateString("en-US", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}{" "}
                • {match.time}
              </time>
            </div>

            <div className="flex justify-between items-center">
              <div className="space-y-4 flex-1">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <TeamBadge
                      teamName={match.teams.team1 as TeamName}
                      size="md"
                    />
                    {match.score && (
                      <span className="text-base font-semibold text-gray-900">
                        {match.score.team1Score}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <TeamBadge
                      teamName={match.teams.team2 as TeamName}
                      size="md"
                    />
                    {match.score && (
                      <span className="text-base font-semibold text-gray-900">
                        {match.score.team2Score}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-sm text-gray-600">{match.venue}</div>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
}
