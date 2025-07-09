import { teams, TeamName } from "../constants/teams";

interface Props {
  teamName: TeamName;
  showLogo?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "compact";
}

export default function TeamBadge({
  teamName,
  showLogo = true,
  size = "md",
  variant = "default",
}: Props) {
  const team = teams[teamName];

  const sizeClasses = {
    sm: "h-6 text-sm",
    md: "h-8 text-base",
    lg: "h-10 text-lg",
  };

  const badgeSize = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  return (
    <div className="flex items-center space-x-3">
      {showLogo && (
        <div
          className={`rounded-lg ${badgeSize[size]} flex items-center justify-center font-bold shadow-sm`}
          style={{
            backgroundColor: team.color,
            color: team.textColor,
            fontSize: 10,
            boxShadow: `inset 0 0 0 1px ${team.textColor}20`,
          }}
        >
          {team.shortName}
        </div>
      )}
      {variant === "default" && (
        <span className={`font-semibold text-gray-900 ${sizeClasses[size]}`}>
          {teamName}
        </span>
      )}
    </div>
  );
}
