import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function PracticalTable({ rows, onView }) {
  if (!rows.length) {
    return (
      <div className="empty-state">
        <div className="empty-icon"><ExternalLink size={22} /></div>
        <h3>No practicals found</h3>
        <p>Try changing your search or status filter.</p>
      </div>
    );
  }

  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Topics</th>
            <th>Date</th>
            <th>Feedback / Marks</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <React.Fragment key={item.no}>
              <tr className="section-row">
                <td><strong>{item.no}</strong></td>
                <td><strong>{item.topic}</strong></td>
                <td>
                  <a href="#submission" className="submission-link">
                    {item.status === "Pending" ? "Submission" : "View Submission"}
                  </a>
                </td>
                <td></td>
                <td><span className={`status ${item.status.toLowerCase()}`}>{item.status}</span></td>
                <td>
                  <button className="view-button" onClick={() => onView(item)}>
                    View Details <ArrowUpRight size={14} />
                  </button>
                </td>
              </tr>
              <tr className="detail-row">
                <td>{item.no}.1</td>
                <td>{item.task}</td>
                <td>{item.date}</td>
                <td><span className={`marks ${item.status.toLowerCase()}`}>{item.marks}</span></td>
                <td></td>
                <td></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}