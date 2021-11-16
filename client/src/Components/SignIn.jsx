import { useForm, Controller } from "react-hook-form";
import { TextField, Box, Button, Typography } from "@mui/material";
export default function UserSignIn({ register }) {
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const handleOnSubmit = (data) => {
    register(data)
    reset({
        name:"",
        password:"",
        email:""
    })
  };
  return (
    <Box sx={{alignSelf:"center",justifySelf:"center",display:"flex",flexDirection:"column",maxWidth:"200px",fleWrap:"wrap"}}>
        <Typography variant="h3" gutterBottom>Register For Free!</Typography>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: { value: true, message: "Input Required" } }}
            render={({field})=><TextField
                {...field} 
                type="text"
                label="Type your name"
                helperText={errors.name?.type==="required"?errors.name.message:" "}
                color={errors.name?.type==="required"?"error":"success"}
                variant="filled"
            />}
          />
          <Controller
            name="email"
            control ={control}
            defaultValue=""
            rules={{required:{value:true,message:"Input Required"}}}
            render={({field})=><TextField
            {...field}
            helperText={errors.email?.type==="required"?errors.email.message:" "}
            color={errors.email?.type==="required"?"error":"success"}
            variant="filled"
            label="Type yor email"
            type="email"
            />}
            />
            <Controller
            name="password"
            control={control}
            defaultValue =""
            rules={{required:{value:true,message:"Input Required"}}}
            render={({field})=><TextField
            {...field}
            label="Type your Password"
            variant="filled"
            helperText={errors.password?.type==="required"?errors.password.message:" "}
            color={errors.password?.type==="required"?"error":"success"}
            type="password"
            />} 
            />
            <Button type="submit" color="secondary" variant="contained">Sign Up!</Button>
        </form>
      </Box>
  );
}

