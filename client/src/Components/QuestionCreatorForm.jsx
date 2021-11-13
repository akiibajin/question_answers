import { useState } from "react"


export default function QuestionCreatorForm({questionCreate}) {
    const [inputs,setInputs] = useState({
        questionName:"",
        questionDescription:"",
        questionCategory:""
    })
    const handleChange=(event)=>{
        setInputs({
            ...inputs,
            [event.target.name]:event.target.value
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        questionCreate(inputs)
        setInputs({
            questionName:"",
            questionDescription:"",
            questionCategory:""
        })
    }
    return(
        <div>
           <form onSubmit={handleSubmit}>
               <label>Name of the question: </label>
               <input type="text" name="questionName" value ={inputs.questionName} onChange={handleChange}/>
               <label>Type of the Question: </label>
               {/* <input type="text" name="questionCategory" value ={inputs.questionCategory} onChange={handleChange}/> */}
               <select name="questionCategory" value={inputs.questionCategory} onChange={handleChange}>
                   <option value="History">History</option>
                   <option value="Computer_Science">Computer Science</option>
                   <option value="General_Knowledge">General Knowledge</option>
               </select>
               <label>Description: </label>
               <textarea  name="questionDescription" value ={inputs.questionDescription} onChange={handleChange}/>
               <input type="submit" value="Post your Question"/>
           </form>
        </div>
    )
};
