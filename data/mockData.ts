import { Match, TeamStats, LiveMatch } from "../types/cricket";

export const mockLiveMatch: LiveMatch = {
  id: "1",
  date: "2025-07-09",
  time: "19:30",
  teams: {
    team1: "Chennai Super Kings",
    team2: "Mumbai Indians",
  },
  venue: "MA Chidambaram Stadium, Chennai",
  isLive: true,
  score: {
    team1Score: "185/4 (20)",
    team2Score: "120/3 (15.2)",
  },
  currentOver: "15.2",
  runRate: 7.82,
  requiredRunRate: 11.23,
  battingTeam: "Mumbai Indians",
  bowlingTeam: "Chennai Super Kings",
  currentBatsmen: ["Rohit Sharma (65)", "Hardik Pandya (32)"],
  currentBowler: "Ravindra Jadeja",
};

export const mockUpcomingMatches: Match[] = [
  {
    id: "2",
    date: "2025-07-10",
    time: "19:30",
    teams: {
      team1: "Royal Challengers Bangalore",
      team2: "Rajasthan Royals",
    },
    venue: "M.Chinnaswamy Stadium, Bangalore",
  },
  {
    id: "3",
    date: "2025-07-11",
    time: "15:30",
    teams: {
      team1: "Delhi Capitals",
      team2: "Kolkata Knight Riders",
    },
    venue: "Arun Jaitley Stadium, Delhi",
  },
];

export const mockPointsTable: TeamStats[] = [
  {
    position: 1,
    teamName: "Chennai Super Kings",
    played: 10,
    won: 8,
    lost: 2,
    nrr: 0.825,
    points: 16,
  },
  {
    position: 2,
    teamName: "Mumbai Indians",
    played: 10,
    won: 7,
    lost: 3,
    nrr: 0.654,
    points: 14,
  },
  {
    position: 3,
    teamName: "Royal Challengers Bangalore",
    played: 10,
    won: 6,
    lost: 4,
    nrr: 0.325,
    points: 12,
  },
  {
    position: 4,
    teamName: "Rajasthan Royals",
    played: 10,
    won: 5,
    lost: 5,
    nrr: 0.125,
    points: 10,
  },
];
