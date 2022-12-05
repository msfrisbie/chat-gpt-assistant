import React from "react";

export default function History({
  history,
  inputValue,
  selectHistoryItem,
}: {
  history: string[];
  inputValue: string;
  selectHistoryItem: (historyItem: string) => void;
}) {
  return history.map((x) => (
    <div
      onClick={() => selectHistoryItem(x)}
      className="cursor-pointer opacity-80 hover:opacity-100"
    >
      {x}
    </div>
  ));
}
