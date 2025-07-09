interface Commentary {
  time: string;
  text: string;
  type: "ball" | "over" | "wicket" | "other";
}

interface Props {
  commentary?: Commentary[];
}

export default function MatchCommentary({ commentary }: Props) {
  if (!commentary?.length) return null;

  return (
    <div className="mt-6 bg-gray-50 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">
        Live Commentary
      </h3>
      <div className="space-y-3 max-h-48 overflow-y-auto">
        {commentary.map((item, index) => (
          <div
            key={index}
            className={`
              flex gap-3 text-sm p-2 rounded-md
              ${
                item.type === "wicket"
                  ? "bg-red-50 text-red-900"
                  : item.type === "over"
                  ? "bg-blue-50 text-blue-900"
                  : "bg-white"
              }
            `}
          >
            <time className="text-gray-500 shrink-0 tabular-nums">
              {item.time}
            </time>
            <p className="flex-1">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
