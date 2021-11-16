import { TextField, Button , Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
export default function AnswerForm({ answerGenerator }) {
    const {control,reset,formState:{errors},handleSubmit} =useForm()
    const handleOnSubmit=(data)=>{
        console.log(data)
        answerGenerator(data.answerToSend)
        reset({
            answerToSend:""
        })
    }
    return (
    <Box>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Controller
            name="answerToSend"
            control={control}
            defaultValue=""
            rules={{ required:{value:true,message:"Input Required"}}}
            render={({field})=><TextField
            {...field}
            color="secondary"
            label="Type your answer"
            multiline
            rows={6}
            sx={{width:"60vw"}}
            />}
            />
            <Button color="info" type="submit" variant="contained">Submit Your Answers</Button>
        </form>
    </Box>
  );
}
