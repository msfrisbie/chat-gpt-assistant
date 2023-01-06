import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../features/interfaces";
import { setTheme, setWidgetId } from "../features/shared/sharedSlice";

export default function SharedWrapper(props: any) {
  const theme = useSelector((state: IRootState) => state.shared.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.widgetId) {
      dispatch(setWidgetId({ widgetId: props.widgetId }));
    }

    if (window.location.hostname !== "mail.google.com") {
      const colorScheme = document.querySelector(`meta[name="color-scheme"]`);
      // Color scheme is explicitly set by meta tag
      const metaTheme: string | null =
        colorScheme?.getAttribute("content") || null;

      if (metaTheme && ["dark", "light"].includes(metaTheme)) {
        dispatch(setTheme({ theme: metaTheme as "dark" | "light" }));
      } else {
        // Color scheme should match system preference
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          dispatch(setTheme({ theme: "dark" }));
        }

        window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", (event) => {
            dispatch(setTheme({ theme: event.matches ? "dark" : "light" }));
          });
      }
    }
  }, []);

  return (
    <div className={`tw-w-full tw-grid tw-place-items-stretch tw-${theme}`}>
      {props.children}
    </div>
  );
}
