// api.js

export const submitFeedback = async (feedbackData) => {
    // Simulate sending feedback to the server
    // Here you can make an actual API call using fetch or axios
    return new Promise((resolve) => {
      setTimeout(() => {
        
        resolve({
          reward: '10% Discount Coupon', // Simulated reward
        });
      }, 1000); // Simulate server delay
    });
  };
