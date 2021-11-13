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
        default:return state
    }
}

export default userReducer