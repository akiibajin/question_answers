import axios from "axios";

export const getQuestions = () => {
  return (dispatch) => {
    axios
      .get("/questions")
      .then((response) => {
        return response.data
      }
        )
      .then((questionsFinded) =>
        dispatch({ type: "QUESTIONS_FINDED", payload: questionsFinded })
      ).catch(error=>console.log(error));
  };
};
export const postQuestions=(question)=>{
    return(dispatch)=>{
        axios.post("/questions",question,{withCredentials:true}).then(response=>response.data)
        .then(message=>console.log(message)) 
        .catch(error=>console.log(error))
    }
}
export const getQuestionById=(id)=>{
    return(dispatch)=>{
        axios.get(`/questions/${id}`)
        .then(response=>response.data)
        .then(questionFinded=>dispatch({type:"QUESTION_FINDED_BY_ID",payload:questionFinded}))
        .catch(error=>console.log(error))
    }
}
export const searchQuestionByName = (questionName) =>{
  return(dispatch)=>{
    axios.get(`/questions?questionName=${questionName}`)
    .then(response=>response.data)
    .then(questionFinded=>dispatch({type:"QUESTION_FINDED_BY_NAME",payload:questionFinded}))
     .catch(error=>console.log(`An error has been finded when search by name a question: ${error}`))
  }
}
export const questionsUser=()=>{
  return(dispatch)=>{
    axios.get(`/questions/userQuestions`,{withCredentials:true})
    .then(response=>console.log(response.data))
    .catch(error=>console.log("An error has been ocurred when the user try to get his questions: ",error))
  }
}