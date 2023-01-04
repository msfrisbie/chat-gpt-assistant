import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../features/interfaces";
import EmailBuilder from "./EmailBuilder";

export default function EmailContentScript() {
  const widgetId = useSelector((state: IRootState) => state.shared.widgetId);

  return <>{widgetId && <EmailBuilder></EmailBuilder>}</>;
}
