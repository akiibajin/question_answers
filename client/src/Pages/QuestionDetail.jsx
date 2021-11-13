import QuestionTemplate from "../Components/QuestionTemplate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionById } from "../Redux/Actions/questionActions";
import { useParams } from "react-router-dom";
export default function QuestionDetail() {
   
     const {id} = useParams()
  const dispatch = useDispatch();
  const questionDetail = useSelector((state) => state.questions.questionDetail);
  useEffect(() => {
    dispatch(getQuestionById(id));
  }, [dispatch, id]);
  return (
    <div>
      <QuestionTemplate
        questionName={questionDetail.questionName}
        questionCategory={questionDetail.questionCategory}
        questionDescription={questionDetail.questionDescription}
      />
    </div>
  );
}
