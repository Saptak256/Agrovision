import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h1>How It Works</h1>
      <div className="intro">
        <p>
          Our AI-driven disease detection system uses advanced algorithms to analyze images and provide accurate diagnoses. Here's how it works:
        </p>
      </div>
      <div className="flowchart-container">
        <img src="/path/to/flowchart.png" alt="Flowchart of the process" className="flowchart-img" />
      </div>
      <div className="steps">
        <h2>Step-by-Step Process</h2>
        <div className="step">
          <div className="step-icon">1</div>
          <div className="step-content">
            <h3>Upload Image</h3>
            <p>Users upload an image of the sample or patient using our intuitive interface.</p>
          </div>
        </div>
        
        <div className="step">
          <div className="step-icon">2</div>
          <div className="step-content">
            <h3>AI Analysis</h3>
            <p>The AI algorithms analyze the image to identify patterns and anomalies.</p>
          </div>
        </div>
        
        <div className="step">
          <div className="step-icon">3</div>
          <div className="step-content">
            <h3>Receive Results</h3>
            <p>Users receive a detailed report with the diagnosis and recommendations based on the analysis.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;