import axios from "axios";

export const userLogIn = (user, navigate) => {
  return (dispatch) => {
    axios
      .post("/user/login", user)
      .then((userLoged) => {
        dispatch({ type: "USER_LOGED", payload: userLoged.data });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
};

export const userSignIn = (userData) =>{
    return (dispatch)=>{
        axios.post("/user/signIn",userData).then(response=>response.data)
        .then(message=>console.log(message))
        .catch(error=>console.log(error))
    }
}
