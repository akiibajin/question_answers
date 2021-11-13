import { useDispatch, useSelector } from "react-redux";
import UserSignIn from "../Components/SignIn";
import UserLogins from "../Components/UserLogIn";
import { userLogIn, userSignIn } from "../Redux/Actions/userActions";
import {useNavigate} from "react-router-dom"
import Profile from "../Components/Profile";

export default function Login() {
    const navigate=useNavigate()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userState);
  const logerIn = (inputs) => {
    dispatch(userLogIn(inputs,navigate));
  };

  const register = (inputs) => {
    dispatch(userSignIn(inputs));
  };

  if (!Object.values(user).length) {
    return (
      <div>
        <UserSignIn register={register} />
        <UserLogins logerIn={logerIn} />
      </div>
    );
  } else {
    return <Profile user={user}/>;
  }
}
