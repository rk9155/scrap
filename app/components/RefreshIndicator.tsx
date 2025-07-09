interface Props {
  lastUpdated: Date;
  isRefetching?: boolean;
}

export default function RefreshIndicator({ lastUpdated, isRefetching }: Props) {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-700">
        Last updated:{" "}
        {lastUpdated.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
      <div className="flex items-center">
        <span
          className={`
            w-2 h-2 rounded-full 
            ${
              isRefetching
                ? "bg-blue-500 animate-ping"
                : "bg-green-500 animate-pulse-slow"
            }
          `}
        />
        <span
          className={`
            absolute w-2 h-2 rounded-full 
            ${isRefetching ? "bg-blue-500" : "bg-green-500"}
          `}
        />
      </div>
    </div>
  );
}
