// src/components/FeedbackForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/submit-feedback', { feedback, rating });
      console.log(response.data); // Assuming server sends a response
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="feedback-form">
      <h2>Provide Feedback</h2>
      <div className="form-group">
        <label>Your Feedback:</label>
        <textarea
          rows="4"
          cols="50"
          value={feedback}
          onChange={handleFeedbackChange}
        />
      </div>
      <div className="form-group">
        <label>Rating:</label>
        {/* Your star rating component */}
      </div>
      <button className="submit-button" onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit Feedback'}
      </button>
    </div>
  );
};

export default FeedbackForm;
