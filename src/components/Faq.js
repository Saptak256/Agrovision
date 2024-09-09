import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  const faqData = [
    {
      question: 'What is AI Disease Detection?',
      answer:
        'AI Disease Detection is a platform that uses artificial intelligence to analyze uploaded images and identify potential diseases. It provides insights based on patterns detected in the images.',
    },
    {
      question: 'How accurate is the detection?',
      answer:
        'The accuracy of the detection depends on the quality of the image and the specific disease. Our AI model is constantly improving, but it is advised to consult a healthcare professional for confirmation.',
    },
    {
      question: 'How can I upload an image?',
      answer:
        'You can upload an image by clicking the upload button on the home page. Please ensure that you are logged in to use this feature.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, your data is encrypted and stored securely. We prioritize user privacy and adhere to strict data protection standards.',
    },
    {
      question: 'What should I do if the AI detects a disease?',
      answer:
        'If the AI detects a potential disease, we shall recommend a remedy based on various factors like the climate of the region, etc. Users may also try consulting a healthcare professional for a proper diagnosis and treatment plan.',
    },
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${selectedQuestion === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <span>{selectedQuestion === index ? '-' : '+'}</span>
            </div>
            {selectedQuestion === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
