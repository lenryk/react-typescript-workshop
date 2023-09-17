import { useEffect } from "react";

// not really a TS exercise
// more of a React one
export const useTimeout = (timerMs: number) => {
  useEffect(
    () => {
      const timer = setTimeout(() => {
        console.log("Done!");
      }, timerMs)

      return clearTimeout(timer)
    },

    [timerMs],
  );
};
