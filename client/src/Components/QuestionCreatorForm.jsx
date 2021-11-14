
import { TextField, Box, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select"
export default function QuestionCreatorForm({ questionCreate }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 
  const handleOnSubmit = (data) => {
    questionCreate(data)
    reset({
        questionName:"",
        questionDescription:"",
        questionCategory:""
    })
  };
  return (
    <Box component="div">
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
              color={errors.questionName?.type==="required"?"error":"success"}
              helperText={errors.questionName?.type==="required"?errors.questionName.message:""}
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
              color={errors.questionDescription?.type==="required"?"error":"success"}
              helperText={errors.questionDescription?.type==="required"?errors.questionDescription.message:""}
            />
          )}
        />
        <Controller
          name="questionCategory"
          control={control}
          defaultValue=""
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
        <Button color="primary" variant="contained" type="submit">Submit Your Question</Button>
      </form>
    </Box>
  );
}
