import {useNavigate} from "react-router-dom"

export default function Profile({user,logout}){
    const navigate=useNavigate()
    return(
        <div>
            <h2>{user.name}</h2>
            <button onClick={()=>navigate("/question/create")}> Make a Question </button>
            <button onClick={logout}>LogOut</button>
        </div>
    )
}