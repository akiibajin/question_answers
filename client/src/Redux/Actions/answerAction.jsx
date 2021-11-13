import axios from "axios"

export const postAnswer=(answer)=>{
    return (dispatch)=>{
        axios.post("/answers")
        .then(response=>response.data)
        .then(message=>console.log(message))
        .catch(error=>console.log(error))
    }
}