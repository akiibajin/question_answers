const answerInitialState = {
  actualAnswers: [],
};

const answerReducer = (state = answerInitialState, action) => {
  switch (action.type) {
    case "ANSWER_SAVED": {
      state.actualAnswers = [];
      return {
        ...state,
        actualAnswers: state.actualAnswers.concat(action.payload),
      };
    }
    case "CHANGE_BEST_ANSWER": {

    }
    default:
      return state;
  }
};

export default answerReducer;
