import { NextResponse } from "next/server";
import {
  mockLiveMatch,
  mockPointsTable,
  mockUpcomingMatches,
} from "../../../data/mockData";

export async function GET() {
  return NextResponse.json({
    liveMatch: mockLiveMatch,
    pointsTable: mockPointsTable,
    upcomingMatches: mockUpcomingMatches,
  });
}
