import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChatGptSettingsKey } from "../consts";
import { IRootState } from "../features/interfaces";
import { getAllSettings } from "../utils/settings";
import EmailBuilder from "./EmailBuilder";

export default function EmailContentScript() {
  const widgetId = useSelector((state: IRootState) => state.shared.widgetId);

  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    getAllSettings().then((settings) => {
      setShowWidget(settings[ChatGptSettingsKey.ENABLE_EMAIL]);
    });
  }, []);

  return <>{showWidget && widgetId && <EmailBuilder></EmailBuilder>}</>;
}
