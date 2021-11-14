import { useDispatch } from "react-redux";
import { changeAnswer } from "../Redux/Actions/answerAction";
export default function AnswerTemplate({ content, theBest, id, idQuestion }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeAnswer(id, idQuestion));
  };
  return (
    <div>
      <p>{content}</p>
      {theBest ? <p>!</p> : <p>-</p>}
      {theBest ? (
        <p></p>
      ) : (
        <button onClick={handleClick}>Check as a Correct Answer</button>
      )}
    </div>
  );
}
