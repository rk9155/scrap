"use client";

import { TeamStats } from "../../types/cricket";
import TeamBadge from "./TeamBadge";
import { TeamName } from "../constants/teams";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface Props {
  teams: TeamStats[];
}

export default function PointsTable({ teams }: Props) {
  const columns: ColumnsType<TeamStats> = [
    {
      title: "Pos",
      dataIndex: "position",
      key: "position",
      width: 60,
      render: (position: number) => (
        <div className="flex items-center">
          <span
            className={`
            inline-flex items-center justify-center w-6 h-6 rounded text-sm
            ${
              position <= 4
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-50 text-gray-600"
            }
          `}
          >
            {position}
          </span>
        </div>
      ),
    },
    {
      title: "Team",
      dataIndex: "teamName",
      key: "team",
      render: (teamName: TeamName) => (
        <TeamBadge teamName={teamName} size="sm" variant="default" />
      ),
    },
    {
      title: "P",
      dataIndex: "played",
      key: "played",
      width: 60,
      align: "center",
    },
    {
      title: "W",
      dataIndex: "won",
      key: "won",
      width: 60,
      align: "center",
      render: (won: number) => (
        <span className="text-green-600 font-medium">{won}</span>
      ),
    },
    {
      title: "L",
      dataIndex: "lost",
      key: "lost",
      width: 60,
      align: "center",
      render: (lost: number) => (
        <span className="text-red-600 font-medium">{lost}</span>
      ),
    },
    {
      title: "NRR",
      dataIndex: "nrr",
      key: "nrr",
      width: 80,
      align: "center",
      render: (nrr: number) => (
        <span
          className={`font-medium ${
            nrr > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {nrr > 0 ? "+" : ""}
          {nrr.toFixed(3)}
        </span>
      ),
    },
    {
      title: "Pts",
      dataIndex: "points",
      key: "points",
      width: 60,
      align: "center",
      render: (points: number) => <span className="font-bold">{points}</span>,
    },
  ];

  return (
    <div className="match-card overflow-x-auto">
      <Table
        columns={columns}
        dataSource={teams.map((team) => ({ ...team, key: team.teamName }))}
        pagination={false}
        size="small"
        className="min-w-full"
      />
    </div>
  );
}
