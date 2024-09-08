import React, { useState } from "react";

import "./MyProfile.css";

const MyProfile = () => {
  const [showDropdown, setShowDropdown] = useState(null);

  const handleDropdownToggle = (section) => {
    setShowDropdown((prev) => (prev === section ? null : section));
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <button className="dropdown-btn" onClick={() => handleDropdownToggle("profile")}>
           My Profile
        </button>
        {showDropdown === "profile" && (
          <div className="dropdown-menu">
            <ProfileForm />
          </div>
        )}
        <button className="dropdown-btn" onClick={() => handleDropdownToggle("history")}>
           History
        </button>
        {showDropdown === "history" && (
          <div className="dropdown-menu">
            <HistoryMenu />
          </div>
        )}
      </div>
      <div className="content-container">
        {/* Additional content if needed */}
      </div>
    </div>
  );
};

// Profile Form Component
const ProfileForm = () => {
  return (
    <div className="profile-form">
      <h2>Profile Details</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />

        <label>Location (Latitude and Longitude):</label>
        <input type="text" placeholder="Enter latitude" />
        <input type="text" placeholder="Enter longitude" />

        <label>Password:</label>
        <input type="password" placeholder="Enter new password" />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />

        <label>Phone Number:</label>
        <input type="tel" placeholder="Enter your phone number" />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

// History Menu Component
const HistoryMenu = () => {
  const [showHistory, setShowHistory] = useState(null);

  const handleHistoryToggle = (type) => {
    setShowHistory((prev) => (prev === type ? null : type));
  };

  return (
    <div className="history-menu">
      <button className="dropdown-btn" onClick={() => handleHistoryToggle("images")}>
        Uploaded Images
      </button>
      {showHistory === "images" && (
        <div className="dropdown-menu">
          <UploadedImages />
        </div>
      )}
      <button className="dropdown-btn" onClick={() => handleHistoryToggle("diseases")}>
        Identified Diseases
      </button>
      {showHistory === "diseases" && (
        <div className="dropdown-menu">
          <IdentifiedDiseases />
        </div>
      )}
    </div>
  );
};

// Uploaded Images Component
const UploadedImages = () => {
  return (
    <div className="uploaded-images">
      <h2>Uploaded Images</h2>
      <p>Here you can see the history of your uploaded images.</p>
      {/* Add more content or components here for image history */}
    </div>
  );
};

// Identified Diseases Component
const IdentifiedDiseases = () => {
  return (
    <div className="identified-diseases">
      <h2>Identified Diseases</h2>
      <p>Here you can see the list of previously identified diseases.</p>
      {/* Add more content or components here for identified diseases */}
    </div>
  );
};

export default MyProfile;
