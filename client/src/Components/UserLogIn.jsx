import {Box,TextField,Button} from "@mui/material"
import {useForm, Controller} from "react-hook-form"
export default function LogIns({logerIn}) {
  const { reset,handleSubmit, formState:{errors},control}=useForm()
  const handleOnSubmit=(data)=>{
    logerIn(data)
    reset({
      email:"",
      password:""
    })
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
      <Controller
      name="email"
      control={control}
      defaultValue=""
      rules={{required:{value:true,message:"Input Required"}}}
      render={({field})=><TextField
      {...field}
      variant="filled"
      color="success"
      label="Type your email"
      />}
      />
      <Controller
      name="password"
      control={control}
      rules={{required:{value:true,message:"Input required"}}}
      defaultValue=""
      render={({field})=><TextField
      {...field}
      label="Type your password"
      color="success"
      variant="filled"
      />} 
      />
      <Button type="submit" color="secondary" variant="contained">Log In</Button>
    </form>
    </Box>
  );
}
{/* <form onSubmit={handleOnSumit}>
<label>Email: </label>
<input
  type="text"
  name="email"
  onChange={handleChange}
  value={inputs.email}
/>
<label>Password: </label>
<input
  type="password"
  name="password"
  onChange={handleChange}
  value={inputs.password}
/>
<input type="submit" value="Sign In!" />
</form> */}
