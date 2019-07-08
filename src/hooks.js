import { useEffect, useReducer } from "react";

export const useForceUpdate = () => useReducer(state => !state, false)[1];

export function useOneTimeEffect() {
  // aka useMount
  useEffect(() => {
    console.log("Run Effect");
    return () => console.log("Clean Up");
  }, []);
}
