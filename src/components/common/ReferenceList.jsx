import { useState } from "react";

export default function ReferenceList({ references = [] }) {
  const [open, setOpen] = useState(false);

  if (!references.length) return null;

  return (
    <div className="reference-list">
      <button
        type="button"
        className="reference-toggle"
        onClick={() => setOpen((prev) => !prev)}
      >
        参考文献 {open ? "▲" : "▼"}
      </button>

      {open && (
        <ol className="reference-items">
          {references.map((ref) => (
            <li key={ref.id}>
              [{ref.id}] {ref.text || ref.citation}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}