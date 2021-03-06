import { Box, TextField, Button, Typography} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

export default function LogIns({ logerIn }) {

  const {
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const handleOnSubmit = (data) => {
    logerIn(data);
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <Box
      sx={{
        alignSelf: "center",
        justifySelf: "center",
        display: "flex",
        flexDirection: "column",
        maxWidth: "200px",
        fleWrap: "wrap",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Log In!
      </Typography>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: { value: true, message: "Input Required" } }}
          render={({ field }) => (
            <TextField
              {...field}
              variant="filled"
              helperText={errors.email?.type==="required"?errors.email.message:" "}
              color={errors.email?.type==="required"?"error":"success"}
              label="Type your email"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: { value: true, message: "Input required" } }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Type your password"
              helperText={errors.password?.type==="required"?errors.password.message:" "}
              color={errors.password?.type==="required"?"error":"success"}
              variant="filled"
              type="password"
            />
          )}
        />
        <Button type="submit" color="secondary" variant="contained">
          Log In
        </Button>
      </form>
    </Box>
  );
}
