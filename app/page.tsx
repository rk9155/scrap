"use client";

import { useState } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { useCricketData } from "./hooks/useCricketData";
import LiveMatch from "./components/LiveMatch";
import PointsTable from "./components/PointsTable";
import Schedule from "./components/Schedule";
import LoadingState from "./components/LoadingState";
import RefreshIndicator from "./components/RefreshIndicator";
import ErrorMessage from "./components/ErrorMessage";
import TabTransition from "./components/TabTransition";

const tabs = [
  { id: "live", label: "Live Match", badge: "Live" },
  { id: "points", label: "Points Table", badge: "League Stage" },
  { id: "schedule", label: "Schedule", badge: "Upcoming" },
] as const;

export default function Home() {
  const [activeTab, setActiveTab] = useState<"live" | "points" | "schedule">(
    "live"
  );
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const {
    liveMatch,
    pointsTable,
    upcomingMatches,
    isLoading,
    error,
    lastUpdated,
    refetch,
    isRefetching,
  } = useCricketData();

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900">IPL 2025</h1>
            <span className="badge badge-blue">Season 18</span>
          </div>
          <RefreshIndicator
            lastUpdated={lastUpdated}
            isRefetching={isRefetching}
          />
        </header>

        {error && (
          <div className="mb-6">
            <ErrorMessage message={error.message} onRetry={refetch} />
          </div>
        )}

        {!isDesktop && (
          <nav
            className="mb-6 sticky top-0 z-10 bg-gray-100 pt-2 pb-3 backdrop-blur-sm backdrop-saturate-150"
            role="tablist"
            aria-label="Dashboard sections"
          >
            <div className="flex rounded-lg bg-white/80 shadow-sm p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`${tab.id}-panel`}
                  id={`${tab.id}-tab`}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`
                    flex-1 py-2 px-4 rounded-md text-sm font-medium 
                    transition-all duration-200 relative
                    ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  {tab.label}
                  {tab.id === "live" && liveMatch && (
                    <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
                  )}
                </button>
              ))}
            </div>
          </nav>
        )}

        <main className="space-y-6">
          <TabTransition show={isDesktop || activeTab === "live"}>
            <section
              id="live-panel"
              role="tabpanel"
              aria-labelledby="live-tab"
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="section-header">Live Match</h2>
                {liveMatch ? (
                  <span className="badge badge-red">Live</span>
                ) : (
                  <span className="badge badge-gray">No Live Matches</span>
                )}
              </div>
              {liveMatch ? <LiveMatch match={liveMatch} /> : <p>No match</p>}
            </section>
          </TabTransition>

          <TabTransition show={isDesktop || activeTab === "points"}>
            <section
              id="points-panel"
              role="tabpanel"
              aria-labelledby="points-tab"
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="section-header">Points Table</h2>
                <span className="badge badge-gray">League Stage</span>
              </div>
              <PointsTable teams={pointsTable} />
            </section>
          </TabTransition>

          <TabTransition show={isDesktop || activeTab === "schedule"}>
            <section
              id="schedule-panel"
              role="tabpanel"
              aria-labelledby="schedule-tab"
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="section-header">Schedule</h2>
                <span className="badge badge-blue">Upcoming Matches</span>
              </div>
              <Schedule matches={upcomingMatches} />
            </section>
          </TabTransition>
        </main>
      </div>
    </div>
  );
}
