import {useNavigate} from "react-router-dom"

export default function Profile({user}){
    const navigate=useNavigate()
    return(
        <div>
            <h2>{user.name}</h2>
            <button onClick={()=>navigate("/question/create")}> Make a Question </button>
        </div>
    )
}