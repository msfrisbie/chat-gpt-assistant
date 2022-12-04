import React, { useEffect, useState } from "react";
import GoogleCard from "./GoogleCard";

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

export default function Popup() {
  const [query, setQuery] = useState(null);

  useEffect(() => {
    getCurrentTab().then((tab) => {
      console.log(tab);
      if (tab && tab.url) {
        const q: string | null = new URL(tab.url).searchParams.get("q");

        console.log({ q });

        if (q) {
          setQuery(q);
        }
      }
    });
  }, []);

  return (
    <div className="min-w-xl">
      {query}
      <GoogleCard query={query}></GoogleCard>
    </div>
  );
}
