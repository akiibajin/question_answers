const questionInitialState={
    questionsCharged:[],
    questionDetail:{}
}

const questionReducer = (state=questionInitialState,action)=>{
    switch(action.type){
        case "QUESTIONS_FINDED":{
            state.questionsCharged=[]
            return{
                ...state,
                questionsCharged:state.questionsCharged.concat(action.payload)
            }
        }
        case "QUESTION_FINDED_BY_ID":{
            return{
                ...state,
                questionDetail:action.payload
            }
        }
        default:return state
    }
}

export default questionReducer