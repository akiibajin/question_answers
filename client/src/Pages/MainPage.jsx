import { useSelector } from "react-redux"
import QuestionsMaper from "../Components/QuestionsMaper"
import { getQuestions } from "../Redux/Actions/questionActions"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export default function MainPage(){
    const questionsCharged=useSelector(state=>state.questions.questionsCharged)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getQuestions());
    }, [dispatch]);
    return(
        <div>
            <QuestionsMaper questionsToMap={questionsCharged}/>
        </div>
    )
}