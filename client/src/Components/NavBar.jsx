import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchQuestionByName } from "../Redux/Actions/questionActions"
export default function NavBar(){
    const dispatch=useDispatch()
     const [inputs,setInputs]=useState({
         questionSearcher:""
     })
     const handleChange=(event)=>{
        setInputs({
            [event.target.name]:event.target.value
        })
     }
     const handleOnClick=()=>{
        dispatch(searchQuestionByName(inputs.questionSearcher))
     }
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/"> home  </Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/questions">Questions</Link>
                </li>
                <li>
                    <input type="text" name="questionSearcher" placeholder="Questions here!" onChange={handleChange} value={inputs.questionSearcher}/>
                    <input type="button" onClick={handleOnClick} value="search any question"/>
                </li>
            </ul>
        </nav>
    )
}