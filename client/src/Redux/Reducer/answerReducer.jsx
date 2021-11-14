const answerInitialState = {
  actualAnswers: [],
};

const sortAnswersByTheBest = (answers) =>
  [...answers].sort((answer) => !answer.theBest);

const answerReducer = (state = answerInitialState, { type, payload }) => {
  switch (type) {
    case "LOAD_ANSWERS": {
      return {
        ...state,
        actualAnswers: sortAnswersByTheBest(payload),
      };
    }
    default:
      return state;
  }
};

export default answerReducer;
