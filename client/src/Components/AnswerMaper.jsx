
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAnswers } from "../Redux/Actions/answerAction";
import AnswerTemplate from "./AnswerTemplate";
import "../Styles/answersMaper.css"
export default function AnswerMaper({ idQuestion }) {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers.actualAnswers);

  useEffect(() => {
    dispatch(getAnswers(idQuestion));
  }, [dispatch, idQuestion]);

  return (
    <div className="answersContainer">
      {answers &&
        answers.map((answer) => (
          <AnswerTemplate
            key={answer.id}
            id={answer.id}
            idQuestion={idQuestion}
            content={answer.answerContent}
            theBest={answer.theBest}
          />
        ))}
    </div>
  );
}
