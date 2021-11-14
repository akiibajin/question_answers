import QuestionTemplate from "../Components/QuestionTemplate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionById } from "../Redux/Actions/questionActions";
import {  postAnswer } from "../Redux/Actions/answerAction";
import { useParams } from "react-router-dom";
import AnswerMaper from "../Components/AnswerMaper";
import AnswerForm from "../Components/AnswerForm";
export default function QuestionDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const questionDetail = useSelector((state) => state.questions.questionDetail);
  useEffect(() => {
    dispatch(getQuestionById(id));
  }, [dispatch, id]);

  const answerGenerator =(answerContent) => {
    dispatch(postAnswer(id, answerContent));
  };
  return (
    <div>
      {questionDetail ? (
        <div>
          <QuestionTemplate
            questionName={questionDetail.questionName}
            questionCategory={questionDetail.questionCategory}
            questionDescription={questionDetail.questionDescription}
          />
          <AnswerMaper idQuestion={id} />
          <AnswerForm answerGenerator={answerGenerator} />
        </div>
      ) : (
        <h1>Nothing to Show</h1>
      )}
    </div>
  );
}
