// src/pages/Home.js
import React from "react";
import './Home.css'; // Ensure this path is correct
import ImageUpload from './ImageUpload'
import MyProfile from "./MyProfile";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1>Welcome to AI Disease Detection</h1>
        <p>
          Discover the power of AI in diagnosing and detecting diseases with accuracy and speed.
        </p>
        <p>
          Our platform leverages advanced algorithms to provide reliable health insights based on your data.
        </p>
      </div>
        <ImageUpload/>
      
    </div>
  );
};

export default Home;
