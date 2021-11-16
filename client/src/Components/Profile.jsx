import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
export default function Profile({user,logout}){
    const navigate=useNavigate()
    return(
        <div>
            <h2>Welcome {user.name}</h2>
            <Button variant="outlined" color="success" onClick={()=>navigate("/question/create")}> Make a Question </Button>
            <Button variant="outlined" color="error" onClick={logout}>LogOut</Button>
        </div>
    )
}