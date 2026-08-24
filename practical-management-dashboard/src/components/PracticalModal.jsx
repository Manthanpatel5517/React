import React from "react";
import { CalendarDays, CheckCircle2, Clock3, X } from "lucide-react";

export default function PracticalModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div>
            <p className="kicker">PRACTICAL {item.no}</p>
            <h2>{item.topic}</h2>
          </div>
          <button className="modal-close" onClick={onClose}><X size={19} /></button>
        </div>

        <div className="modal-status">
          {item.status === "Completed" ? <CheckCircle2 size={18} /> : <Clock3 size={18} />}
          <span>{item.status}</span>
        </div>

        <div className="modal-grid">
          <div><CalendarDays size={17} /><span>Date<strong>{item.date}</strong></span></div>
          <div><span>Task<strong>{item.task}</strong></span></div>
          <div><span>Marks<strong>{item.marks}</strong></span></div>
        </div>

        <div className="feedback-box">
          <span>Feedback</span>
          <p>{item.feedback}</p>
        </div>

        <button className="modal-action" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}