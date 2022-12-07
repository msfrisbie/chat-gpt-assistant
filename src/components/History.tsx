import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { SearchContext } from "../contexts/Search";

export default function History({
  inputValue,
  selectHistoryItem,
}: {
  inputValue: string;
  selectHistoryItem: (historyItem: string) => void;
}) {
  const { history } = useContext(SearchContext);

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
