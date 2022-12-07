import React from "react";
import { SearchProvider } from "../contexts/Search";
import ContentScript from "./ContentScript";

export default function ContentScriptApp() {
  return (
    <SearchProvider>
      <ContentScript></ContentScript>
    </SearchProvider>
  );
}
