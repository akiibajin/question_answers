import { questionsUser } from "../Redux/Actions/questionActions"
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import QuestionsMaper from "../Components/QuestionsMaper"
export default function QuestionsUser() {
    const dispatch=useDispatch()
    const questionUser = useSelector(state=>state.questions.questionsUser)
    useEffect(()=>{
        dispatch(questionsUser())
    },[dispatch])
    
    return(
        <div>
            <QuestionsMaper questionsToMap={questionUser}/>
        </div>
    )
};
