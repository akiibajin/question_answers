import QuestionCreatorForm from "../Components/QuestionCreatorForm";
import { useDispatch} from "react-redux"
import {postQuestions} from "../Redux/Actions/questionActions"
export default function QuestionCreator(){
    const dispatch=useDispatch ()
    const questionCreate=(inputs)=>{
        dispatch(postQuestions(inputs))
    }
 return(
     <div>
         <QuestionCreatorForm questionCreate={questionCreate}/>
     </div>
 )
}