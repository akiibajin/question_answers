import { useState } from "react"

export default function UserSignIn({register}){
    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange=(event)=>{
         setInputs({
             ...inputs,
             [event.target.name]:event.target.value
         })
    }
    const handleOnSubmit=(event)=>{
        event.preventDefault()
        register(inputs)
    }
    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>Name: </label>
                <input type="text" name="name" onChange={handleChange} value={inputs.name}/>
                <label>Email: </label>
                <input type="email" name="email" onChange={handleChange} value={inputs.email}/>
                <label>Password: </label>
                <input type="password" name="password" onChange={handleChange} value={inputs.password} />
                <input type="submit" value="Register for free!"/>
            </form>
        </div>
    )
}