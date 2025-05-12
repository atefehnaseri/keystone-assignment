import { useRef } from "react";
import { useKeyEventHandler } from "../hooks/useKeyEventHandler";

export default function SearchInput({ query, onSearch }) {
  //focus on the search input when the app loads
  const inputElement = useRef(null);
  useKeyEventHandler("Enter", () => {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    onSearch("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      ref={inputElement}
    />
  );
}
