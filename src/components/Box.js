import { useState } from "react";
import Button from "./Button.js";
export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  function handleToggle() {
    setIsOpen((open) => !open);
  }
  return (
    <div className="box">
      <Button type="toggle" onClick={handleToggle}>
        {isOpen ? "–" : "+"}
      </Button>
      {isOpen && children}
    </div>
  );
}
