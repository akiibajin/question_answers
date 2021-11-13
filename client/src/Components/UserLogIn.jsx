import { useState } from "react"

export default function LogIns({logerIn}) {
    const [inputs,setInputs]=useState({
        email:"",
        password:""
    })

    const handleOnSumit=(event)=>{
      event.preventDefault()
      logerIn(inputs)
    }
    const handleChange=(event)=>{
        setInputs({
            ...inputs,
            [event.target.name]:event.target.value
        })
    }
  return (
    <div>
      <form onSubmit={handleOnSumit}>
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
      </form>
    </div>
  );
}
