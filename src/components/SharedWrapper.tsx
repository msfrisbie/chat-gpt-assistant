import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme, setWidgetId } from "../features/shared/sharedSlice";

export default function SharedWrapper(props: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.widgetId) {
      dispatch(setWidgetId({ widgetId: props.widgetId }));
    }

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
  }, []);

  return props.children;
}
