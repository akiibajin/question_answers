import { useForm, Controller } from "react-hook-form";
import { TextField, Box, Button } from "@mui/material";
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
    <div>
      <Box>
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
                color="success"
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
            color="success"
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
            color="success"
            type="password"
            />} 
            />
            <Button type="submit" color="secondary" variant="contained">Sign Up!</Button>
        </form>
      </Box>
    </div>
  );
}
