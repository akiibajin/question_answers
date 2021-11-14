const questionInitialState={
    questionsCharged:[],
    questionDetail:{},
    questionsUser:[]
}

const questionReducer = (state=questionInitialState,{type,payload})=>{
    switch(type){
        case "QUESTIONS_FINDED":{
            return{
                ...state,
                questionsCharged:[...payload]
            }
        }
        case "QUESTION_FINDED_BY_ID":{
            return{
                ...state,
                questionDetail:payload
            }
        }
        case "QUESTION_USER":{

            return{
                ...state,
                questionsUser:[...payload]
            }
        }
        default:return state
    }
}

export default questionReducer