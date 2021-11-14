import { questionsUser } from "../Redux/Actions/questionActions"
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"

export default function QuestionsUser() {
    const dispatch=useDispatch()
    const questionUser = useSelector(state=>state.questions.questionsUser)
    useEffect(()=>{
        dispatch(questionUser())
    },[dispatch])
    return(
        <div>
            <h1>here que questions of the user</h1>
        </div>
    )
};
