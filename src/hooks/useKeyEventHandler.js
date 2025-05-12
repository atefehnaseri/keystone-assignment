import { useEffect } from "react";

export function useKeyEventHandler(
  targetKey,
  handlerFunction,
  eventType = "keydown" //keypress, keyup
) {
  useEffect(() => {
    const callBack = (e) => {
      if (e.code.toLowerCase() === targetKey.toLowerCase()) handlerFunction();
    };
    document.addEventListener(eventType, callBack);

    return () => {
      document.removeEventListener(eventType, callBack);
    };
  }, [eventType, targetKey, handlerFunction]);
}
