import React from 'react';
import './About.css';
import ImageSlider from './ImageSlider';

const About = () => {
  return (
        
      <div className="about-content">
        <h1>About AI Disease Detection</h1>
        <p>
          AI Disease Detection is an innovative platform that leverages artificial intelligence to detect diseases from images.
          Our goal is to provide fast, accurate, and reliable disease identification to assist both medical professionals and individuals.
        </p>
        <ImageSlider/>
        <div className="about-buttons">
          <button className="learn-more-btn">Learn More</button>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>

      
  );
};


export default About;
