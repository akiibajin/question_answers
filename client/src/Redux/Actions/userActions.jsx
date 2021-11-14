import axios from "axios";

export const userLogIn = (user, navigate) => {
  return (dispatch) => {
    axios
      .post("/user/login", user,{withCredentials:true})
      .then((userLoged) => {
        dispatch({ type: "USER_LOGED", payload: userLoged.data });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
};

export const userSignIn = (userData) =>{
    return (dispatch)=>{
        axios.post("/user/signIn",userData,{withCredentials:true}).then(response=>response.data)
        .then(message=>console.log(message))
        .catch(error=>console.log(error))
    }
}

export const logout = ()=>{
  return (dispatch)=>{
    axios.get("/user/logOut",{withCredentials:true})
    .then(response=>response.data)
    .then(userLoggedOut=>dispatch({type:"LOG_OUT"}))
    .catch(error=>console.log(error))
  }
}