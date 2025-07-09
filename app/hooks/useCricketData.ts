import { useEffect } from "react";
import { LiveMatch, Match, TeamStats } from "../../types/cricket";
import { useSafeState } from "./useSafeState";

interface CricketData {
  liveMatch: LiveMatch | null;
  pointsTable: TeamStats[];
  upcomingMatches: Match[];
}

interface UseCricketDataReturn extends CricketData {
  isLoading: boolean;
  error: Error | null;
  lastUpdated: Date;
  refetch: () => Promise<void>;
  isRefetching: boolean;
}

export function useCricketData(refreshInterval = 30000): UseCricketDataReturn {
  const [data, setData] = useSafeState<CricketData>({
    liveMatch: null,
    pointsTable: [],
    upcomingMatches: [],
  });
  const [isLoading, setIsLoading] = useSafeState(true);
  const [isRefetching, setIsRefetching] = useSafeState(false);
  const [error, setError] = useSafeState<Error | null>(null);
  const [lastUpdated, setLastUpdated] = useSafeState(new Date());

  const fetchData = async (isInitialLoad = false) => {
    if (!isInitialLoad) {
      setIsRefetching(true);
    }
    try {
      const response = await fetch("/api/cricket");
      if (!response.ok) {
        throw new Error("Failed to fetch cricket data");
      }
      const newData = await response.json();
      setData(newData);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
      // Don't update the data if there's an error, keep showing the old data
    } finally {
      setIsLoading(false);
      setIsRefetching(false);
    }
  };

  useEffect(() => {
    fetchData(true);
    const interval = setInterval(() => fetchData(false), refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  const refetch = () => fetchData(false);

  return {
    ...data,
    isLoading,
    isRefetching,
    error,
    lastUpdated,
    refetch,
  };
}
