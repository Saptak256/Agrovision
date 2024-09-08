// src/pages/FAQ.js
import React from "react";
import './FAQ.css'; // Ensure this path is correct

const FAQ = () => {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <ul>
        <li>
          <div className="question">What is AI Disease Detection?</div>
          <div className="answer">
            AI Disease Detection is a platform that uses artificial intelligence to analyze health data and provide diagnostic insights.
          </div>
        </li>
        <li>
          <div className="question">How does the AI work?</div>
          <div className="answer">
            Our AI algorithms analyze various health indicators and compare them against a large database of known conditions to provide accurate results.
          </div>
        </li>
        <li>
          <div className="question">Is my data secure?</div>
          <div className="answer">
            Yes, we prioritize your privacy and employ advanced security measures to protect your data.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
