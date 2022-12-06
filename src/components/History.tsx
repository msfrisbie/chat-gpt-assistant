import React from "react";
import Card from "react-bootstrap/Card";

export default function History({
  history,
  inputValue,
  selectHistoryItem,
}: {
  history: string[];
  inputValue: string;
  selectHistoryItem: (historyItem: string) => void;
}) {
  return (
    <>
      {history
        .filter((x) => x.toLowerCase().includes(inputValue.toLowerCase()))
        .map((x) => (
          <Card key={x} className="bg-dark tw-text-white">
            <Card.Body>
              <div
                onClick={() => selectHistoryItem(x)}
                className="tw-cursor-pointer tw-opacity-80 hover:tw-opacity-100"
              >
                {x}
              </div>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}
