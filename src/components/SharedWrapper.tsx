import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../features/shared/sharedSlice";

export default function SharedWrapper(props) {
  const dispatch = useDispatch();

  useEffect(() => {
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
