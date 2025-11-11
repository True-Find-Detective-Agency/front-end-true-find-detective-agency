import { useEffect, useState } from "react";
import { PiCursorClickFill } from "react-icons/pi";
import "../css/customCursor.css";
import { PiCursorFill } from "react-icons/pi";


export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });

    const handleHover = (e) => {

      const clickable =
        e.target.onclick ||
        e.target.closest("button, a, input, textarea, select");
      setIsClickable(!!clickable);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div
      className={`cursor ${isClickable ? "clickable" : ""}`}
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    >
      {isClickable ? (
        <PiCursorClickFill  size={25} color="#594000ee" strokeWidth={2.5} />
      ) : (
        <PiCursorFill size={25} color="#daa520ff" />
      )}
    </div>
  );
}
