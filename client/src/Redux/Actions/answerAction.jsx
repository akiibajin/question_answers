import axios from "axios";

export const postAnswer = (idQuestion, answerToSend) => {
  return (dispatch) => {
    axios
      .post("/answers", { idQuestion, answerToSend }, { withCredentials: true })
      .then((response) => response.data)
      .then((answer) => dispatch({ type: "ANSWER_SAVED", payload: answer }))
      .catch((error) => console.log(error));
  };
};
export const getAnswers = (idQuestion) => {
  return (dispatch) => {
    axios
      .get(`/answers?idQuestion=${idQuestion}`)
      .then((response) => response.data)
      .then((answerFetched) =>
        dispatch({ type: "ANSWER_SAVED", payload: answerFetched })
      )
      .catch((error) =>
        console.log("Here the error when try to get the answers: ", error)
      );
  };
};
export const changeAnswer = (idAnswer, idQuestion) => {
  return (dispatch) => {
    axios
      .put(
        "/answers/changeBool",
        { idAnswer, idQuestion },
        { withCredentials: true }
      )
      .then((response) => response.data)
      .then(({idAnswerUpdated}) =>
        dispatch({ type: "ANSWER_SAVED", payload: idAnswerUpdated })
      );
  };
};
