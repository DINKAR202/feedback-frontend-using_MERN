// reducers.js
const initialState = {
  reward: '',
  isLoading: false,
  isError: false,
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_FEEDBACK_SUCCESS':
      return {
        ...state,
        reward: action.payload,
        isLoading: false,
        isError: false,
      };
    case 'SUBMIT_FEEDBACK_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default feedbackReducer;
