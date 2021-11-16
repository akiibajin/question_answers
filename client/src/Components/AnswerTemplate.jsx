import { useDispatch } from "react-redux";
import { changeAnswer } from "../Redux/Actions/answerAction";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Button, Typography } from "@mui/material";
import "../Styles/answerTemplate.css";
export default function AnswerTemplate({ content, theBest, id, idQuestion }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeAnswer(id, idQuestion));
  };
  return (
    <div className="answerChildren">
      <span>{content}</span>
      {theBest ? (
        <CheckBoxIcon fontSize="large" color="success" />
      ) : (
        <button
          variant="contained"
          color="info"
          onClick={handleClick}
        >
          <Typography>
          Correct
          </Typography>
        </button>
      )}
    </div>
  );
}
