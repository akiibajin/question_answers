import QuestionTemplate from "./QuestionTemplate"
import { Link } from "react-router-dom"

export default function QuestionsMaper({questionsToMap}) {

    return(
        <div>
        {questionsToMap ? questionsToMap.map((question)=>
            <Link  key={question.id} to={`/questions/detail/${question.id}`}>
            <QuestionTemplate 
            questionName={question.questionName}
            questionCategory={question.questionCategory}
            questionDescription={question.questionDescription}
            />
            </Link>
            )   
            :
            <h1>I Can't Find any Questions</h1>
        }
        </div>
    )
};