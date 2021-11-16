import {
  TextField,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Dialog,
} from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
export default function QuestionCreatorForm({ questionCreate }) {
  const [open, setOpen] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOnSubmit = (data) => {
    setOpen(false);
    questionCreate(data);
    reset({
      questionName: "",
      questionDescription: "",
      questionCategory: "",
    });
  };
  return (
    <Box
      component="div"
      sx={{ width: "40vw", display: "flex", flexDirection: "column" }}
    >
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Controller
          name="questionName"
          control={control}
          rules={{
            required: { value: true, message: "This input is required" },
          }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="The name of the question"
              variant="filled"
              color={
                errors.questionName?.type === "required" ? "error" : "success"
              }
              helperText={
                errors.questionName?.type === "required"
                  ? errors.questionName.message
                  : ""
              }
            />
          )}
        />
        <Controller
          name="questionDescription"
          control={control}
          rules={{
            required: { value: true, message: "This input is required" },
          }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              multiline
              rows={4}
              variant="filled"
              label="The Description"
              color={
                errors.questionDescription?.type === "required"
                  ? "error"
                  : "success"
              }
              helperText={
                errors.questionDescription?.type === "required"
                  ? errors.questionDescription.message
                  : ""
              }
            />
          )}
        />
        <Controller
          name="questionCategory"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "History", label: "History" },
                { value: "Computer_Science", label: "Computer Science" },
                { value: "General_Knowledge", label: "General Knowledge" },
              ]}
            />
          )}
        />
        <Button color="primary" onClick={handleClickOpen} variant="contained">
          Submit Your Question
        </Button>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Upload Question"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to publish this question?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit(handleOnSubmit)} autoFocus>
              YES
            </Button>
            <Button onClick={handleClose}>NO</Button>
          </DialogActions>
        </Dialog>
      </form>
    </Box>
  );
}
