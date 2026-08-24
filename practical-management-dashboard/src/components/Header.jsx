import React from "react";
import { Bell, Menu, Search } from "lucide-react";

export default function Header({ onMenu }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={onMenu}><Menu size={21} /></button>
        <div>
          <p className="kicker">ACADEMIC WORKSPACE</p>
          <h1>Practical Management</h1>
        </div>
      </div>

      <div className="header-right">
        <button className="icon-button notification"><Bell size={19} /><i /></button>
        <div className="profile">
          <div className="avatar">M</div>
          <div className="profile-text">
            <strong>Student</strong>
            <span>React Batch</span>
          </div>
        </div>
      </div>
    </header>
  );
}