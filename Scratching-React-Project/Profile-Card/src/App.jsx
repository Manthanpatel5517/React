import React, { useState } from "react";
import "./App.css";

function App() {
  const [follow, setFollow] = useState(false);
  const [followers, setFollowers] = useState(1250);
  const [following, setFollowing] = useState(350);

  const handleFollow = () => {
    if (!follow) {
      setFollow(true);
      setFollowers(followers + 1);

    } else {
      setFollow(false);
      setFollowers(followers - 1);
      
    }
  };

  return (
    <div className="container">
      <div className="card">
        <img
          src="https://i.pravatar.cc/200?img=12"
          alt="profile"
          className="profile"
        />

        <h2>Manthan Patel</h2>
        <p className="username">Manthan_5517</p>

        <div className="stats">
          <div>
            <h3>120</h3>
            <p>Posts</p>
          </div>

          <div>
            <h3>{followers}</h3>
            <p>Followers</p>
          </div>

          <div>
            <h3>{following}</h3>
            <p>Following</p>
          </div>
        </div>

        <button
          className={follow ? "btn unfollow" : "btn follow"}
          onClick={handleFollow}
        >
          {follow ? "Following ✓" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default App;