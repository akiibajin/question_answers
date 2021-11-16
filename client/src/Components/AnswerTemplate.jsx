import { useDispatch } from "react-redux";
import { changeAnswer } from "../Redux/Actions/answerAction";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Dialog,
  Button,
} from "@mui/material";
import { useState } from "react";
import "../Styles/answerTemplate.css";
export default function AnswerTemplate({ content, theBest, id, idQuestion }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    dispatch(changeAnswer(id, idQuestion));
  };
  return (
    <div className="answerChildren">
      <span>{content}</span>
      {theBest ? (
        <CheckBoxIcon fontSize="large" color="success" />
      ) : (
        <>
          <button onClick={handleClickOpen}>
            <Typography>Correct</Typography>
          </button>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Change Answer"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to change the answer?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClick} autoFocus>
                YES
              </Button>
              <Button onClick={handleClose}>NO</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </div>
  );
}
