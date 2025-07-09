export interface Teams {
  team1: string;
  team2: string;
}

export interface Score {
  team1Score: string;
  team2Score: string;
}

export interface Commentary {
  time: string;
  text: string;
  type: "ball" | "over" | "wicket" | "other";
}

export interface Match {
  id: string;
  date: string;
  time: string;
  teams: Teams;
  venue: string;
  score?: Score;
  matchType: "league" | "playoff" | "final";
  status: "upcoming" | "live" | "completed";
}

export interface LiveMatch extends Match {
  currentOver: string;
  runRate: number;
  requiredRunRate?: number;
  currentBatsmen: string[];
  currentBowler: string;
  commentary?: Commentary[];
  status: "live";
}

export interface TeamStats {
  position: number;
  teamName: string;
  played: number;
  won: number;
  lost: number;
  nrr: number;
  points: number;
  lastFive?: ("W" | "L" | "N" | "T")[];
  qualificationStatus?: "qualified" | "eliminated" | "in-contention";
}
