import axios from "axios";

export const getAnswers = (idQuestion) => {
  return (dispatch) => {
    axios
      .get(`/answers?idQuestion=${idQuestion}`)
      .then((response) => response.data)
      .then((answerFetched) =>
        dispatch({ type: "LOAD_ANSWERS", payload: answerFetched })
      )
      .catch((error) =>
        console.log("Here the error when try to get the answers: ", error)
      );
  };
};

export const postAnswer = (idQuestion, answerToSend) => {
  return (dispatch) => {
    axios
      .post("/answers", { idQuestion, answerToSend }, { withCredentials: true })
      .then((response) => response.data)
      .then((answer) => dispatch({ type: "LOAD_ANSWERS", payload: answer }))
      .catch((error) => console.log(error));
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
      .then((data) =>{
        const container=data
        dispatch({ type: "LOAD_ANSWERS", payload: data })
      }
      )
      .catch((error) => console.log(error));
  };
};
