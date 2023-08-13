// actions.js
import axios from 'axios';

export const submitFeedback = (feedbackData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/submit-feedback', feedbackData); // Replace with your backend API endpoint
    dispatch({
      type: 'SUBMIT_FEEDBACK_SUCCESS',
      payload: response.data.reward, // Assuming your server returns a reward in the response
    });
  } catch (error) {
    dispatch({
      type: 'SUBMIT_FEEDBACK_FAILURE',
    });
  }
};
