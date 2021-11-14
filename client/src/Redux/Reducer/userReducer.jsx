const userInitialState={
    userState:{}
}

const userReducer =(state=userInitialState,action)=>{
    switch(action.type){
        case "USER_LOGED":{
            return{
                ...state,
                userState:action.payload
            }
        }
        case "LOG_OUT":{
            return{
                ...state,
                userState:{}
            }
        }
        default:return state
    }
}

export default userReducer